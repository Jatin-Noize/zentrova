"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Syne } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiX, FiMail, FiPhone, FiUser, FiMessageSquare } from "react-icons/fi";

const font = Syne({
  subsets: ["latin"],
  weight: "400"
})

const ContactUsForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (formData.phone && !/^[\d\s+-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async () => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "_owerlINIFR63_cnt");
    
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_bit8phi",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_wdgw004",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone || 'Not provided',
          message: formData.message,
        }
      );
      
      console.log('Email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check rate limit in localStorage
    const lastSubmissionTime = localStorage.getItem('lastContactSubmission');
    if (lastSubmissionTime) {
      const currentTime = Date.now();
      const timeDiff = currentTime - parseInt(lastSubmissionTime, 10);
      const oneHour = 60 * 60 * 1000; // milliseconds in an hour
      
      if (timeDiff < oneHour) {
        setSubmitStatus({
          success: false,
          message: "Please wait at least one hour before submitting another message.",
        });
        return;
      }
    }

    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      // Store submission time in localStorage
      localStorage.setItem('lastContactSubmission', Date.now().toString());

      const emailResult = await sendEmail();

      if (emailResult) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "", phone: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Remove the stored time if submission failed
      localStorage.removeItem('lastContactSubmission');
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const modalVariants = {
    hidden: { y: -20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const fields = [
    {
      name: "name",
      label: "Name",
      icon: <FiUser className="text-orange-400" />,
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      icon: <FiMail className="text-orange-400" />,
      type: "email",
      required: true,
    },
    {
      name: "phone",
      label: "Phone",
      icon: <FiPhone className="text-orange-400" />,
      type: "tel",
      required: false,
    },
    {
      name: "message",
      label: "Message",
      icon: <FiMessageSquare className="text-orange-400" />,
      type: "textarea",
      required: true,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${font.className} `}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          {/* Gradient Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2e026d]/90 via-[#15162c]/90 to-black/90 backdrop-blur-md"></div>

          <motion.div
            className="relative w-full max-w-md mx-4 bg-gradient-to-br from-[#1e1b4b] via-[#1e1e2e] to-[#0f0c29] text-white rounded-2xl shadow-2xl shadow-orange-900/30 border border-orange-700/30 overflow-hidden"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-8">
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Contact Us
                </motion.h2>
                <motion.button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiX className="w-6 h-6" />
                </motion.button>
              </div>

              {submitStatus.message ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-5 mb-6 rounded-xl border ${
                    submitStatus.success
                      ? "bg-emerald-900/30 text-emerald-100 border-emerald-600/30"
                      : "bg-rose-900/30 text-rose-100 border-rose-600/30"
                  }`}
                >
                  <p className="mb-4 text-sm md:text-base">{submitStatus.message}</p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setSubmitStatus({ success: false, message: "" })}
                      className={`px-4 py-2 rounded-lg font-medium text-sm ${
                        submitStatus.success
                          ? "bg-emerald-700 hover:bg-emerald-600"
                          : "bg-rose-700 hover:bg-rose-600"
                      } text-white transition-all`}
                    >
                      {submitStatus.success ? "Close" : "Try Again"}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {fields.map((field, i) => (
                    <motion.div
                      key={field.name}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={formItemVariants}
                    >
                      <div className="flex items-center mb-1.5">
                        {field.icon}
                        <label
                          htmlFor={field.name}
                          className="ml-2 text-sm font-medium text-gray-300"
                        >
                          {field.label}
                          {!field.required && (
                            <span className="text-xs text-gray-400 ml-1"></span>
                          )}
                        </label>
                      </div>
                      
                      {field.type === "textarea" ? (
                        <>
                          <textarea
                            id={field.name}
                            name={field.name}
                            rows={4}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required={field.required}
                            className={`w-full px-4 py-3 bg-gray-800/50 border ${
                              errors[field.name] ? 'border-rose-500' : 'border-gray-700'
                            } rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                          />
                          {errors[field.name] && (
                            <p className="mt-1 text-sm text-rose-400">{errors[field.name]}</p>
                          )}
                        </>
                      ) : (
                        <>
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required={field.required}
                            className={`w-full px-4 py-3 bg-gray-800/50 border ${
                              errors[field.name] ? 'border-rose-500' : 'border-gray-700'
                            } rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                          />
                          {errors[field.name] && (
                            <p className="mt-1 text-sm text-rose-400">{errors[field.name]}</p>
                          )}
                        </>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    custom={fields.length}
                    initial="hidden"
                    animate="visible"
                    variants={formItemVariants}
                    className="flex justify-end gap-3 pt-2"
                  >
                    <button
                      type="button"
                      onClick={onClose}
                      disabled={isSubmitting}
                      className="px-5 py-2.5 rounded-lg border border-gray-600 text-sm text-gray-300 hover:bg-gray-700/30 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 transition-all text-white shadow-lg shadow-orange-800/30 disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          ></path>
                        </svg>
                      ) : (
                        <>
                          <FiSend className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactUsForm;