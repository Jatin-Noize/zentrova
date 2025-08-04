'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../app/auth-context';
import { useRouter } from 'next/navigation';

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const staticCredentials = {
    username: 'admin@zentrova.com',
    password: 'zentrova@123'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === staticCredentials.username && password === staticCredentials.password) {
      login(); // Set authentication state
      router.push('/admin'); // Use Next.js router for navigation
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-gradient-to-br from-orange-900/80 to-black rounded-xl shadow-2xl border border-orange-700/50 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-orange-300 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Admin Login</h2>
                <p className="text-orange-200">Access your Zentrova dashboard</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-orange-200 mb-1">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-orange-900/30 border border-orange-700/50 rounded-lg text-white placeholder-orange-400/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter username"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-orange-200 mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-orange-900/30 border border-orange-700/50 rounded-lg text-white placeholder-orange-400/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter password"
                    required
                  />
                </div>

                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm"
                  >
                    {error}
                  </motion.p>
                )}

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-orange-500/20"
                >
                  Sign In
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;