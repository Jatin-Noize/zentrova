'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Orange light glow particles
    const particlesCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < particlesCount; i++) {
      positions.push((Math.random() - 0.5) * 40);
      positions.push((Math.random() - 0.5) * 40);
      positions.push((Math.random() - 0.5) * 40);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xff6a00,
      size: 0.4,
      transparent: true,
      opacity: 0.7,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 15;

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.0015;
      points.rotation.x += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="three-container absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeScene;
