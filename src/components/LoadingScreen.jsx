import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const canvasRef = useRef(null);

  // 1. Progress Timer
  useEffect(() => {
    const duration = 1800; // 1.8 seconds
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 500); // 500ms fade transition
          }, 200);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // 2. 3D Running Chicken Scene
  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 1.2, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(180, 180);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3D Chicken Group
    const chickenGroup = new THREE.Group();
    scene.add(chickenGroup);

    // Body (Sphere)
    const bodyGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const bodyMat = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 30 });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = 0.7;
    chickenGroup.add(bodyMesh);

    // Head (Sphere)
    const headGeo = new THREE.SphereGeometry(0.45, 16, 16);
    const headMat = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const headMesh = new THREE.Mesh(headGeo, headMat);
    headMesh.position.set(0.4, 1.3, 0);
    chickenGroup.add(headMesh);

    // Beak (Cone)
    const beakGeo = new THREE.ConeGeometry(0.12, 0.3, 8);
    const beakMat = new THREE.MeshPhongMaterial({ color: 0xf59e0b }); // Amber/Orange
    const beakMesh = new THREE.Mesh(beakGeo, beakMat);
    beakMesh.rotation.z = -Math.PI / 2;
    beakMesh.position.set(0.85, 1.25, 0);
    chickenGroup.add(beakMesh);

    // Crest / Comb (Box/Cone Red)
    const combGeo = new THREE.BoxGeometry(0.15, 0.25, 0.08);
    const combMat = new THREE.MeshPhongMaterial({ color: 0xef4444 }); // Red
    const combMesh = new THREE.Mesh(combGeo, combMat);
    combMesh.position.set(0.4, 1.75, 0);
    chickenGroup.add(combMesh);

    // Eyes (Small Spheres)
    const eyeGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x090f1c });
    const eyeLeft = new THREE.Mesh(eyeGeo, eyeMat);
    eyeLeft.position.set(0.65, 1.4, 0.22);
    chickenGroup.add(eyeLeft);

    const eyeRight = new THREE.Mesh(eyeGeo, eyeMat);
    eyeRight.position.set(0.65, 1.4, -0.22);
    chickenGroup.add(eyeRight);

    // Wings (Box/Cone)
    const wingGeo = new THREE.BoxGeometry(0.5, 0.3, 0.1);
    const wingMat = new THREE.MeshPhongMaterial({ color: 0xe2e8f0 });
    const wingLeft = new THREE.Mesh(wingGeo, wingMat);
    wingLeft.position.set(-0.1, 0.75, 0.68);
    chickenGroup.add(wingLeft);

    const wingRight = new THREE.Mesh(wingGeo, wingMat);
    wingRight.position.set(-0.1, 0.75, -0.68);
    chickenGroup.add(wingRight);

    // Legs Group
    const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.5);
    const legMat = new THREE.MeshPhongMaterial({ color: 0xf59e0b });

    const legLeftGroup = new THREE.Group();
    const legLeftMesh = new THREE.Mesh(legGeo, legMat);
    legLeftMesh.position.y = -0.25;
    legLeftGroup.add(legLeftMesh);
    legLeftGroup.position.set(0.15, 0.35, 0.25);
    chickenGroup.add(legLeftGroup);

    const legRightGroup = new THREE.Group();
    const legRightMesh = new THREE.Mesh(legGeo, legMat);
    legRightMesh.position.y = -0.25;
    legRightGroup.add(legRightMesh);
    legRightGroup.position.set(0.15, 0.35, -0.25);
    chickenGroup.add(legRightGroup);

    // Shadow Disc
    const shadowGeo = new THREE.CircleGeometry(0.8, 16);
    const shadowMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.25 });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.1;
    scene.add(shadowMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x06b6d4, 2);
    dirLight.position.set(5, 10, 5);
    scene.add(dirLight);

    // Animation Loop
    let clock = new THREE.Clock();
    let reqId;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime() * 12; // Running speed

      // Leg running swing
      legLeftGroup.rotation.z = Math.sin(time) * 0.8;
      legRightGroup.rotation.z = Math.sin(time + Math.PI) * 0.8;

      // Wing flapping
      wingLeft.rotation.x = Math.sin(time * 1.5) * 0.3;
      wingRight.rotation.x = -Math.sin(time * 1.5) * 0.3;

      // Body bobbing up & down
      chickenGroup.position.y = Math.abs(Math.sin(time)) * 0.15;
      chickenGroup.rotation.z = Math.sin(time) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060a12] text-white selection:bg-cyan-500"
        >
          {/* Ambient Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>

          {/* 3D Running Chicken Canvas */}
          <div className="relative z-10 w-44 h-44 flex items-center justify-center mb-2">
            <div ref={canvasRef} className="w-44 h-44 flex items-center justify-center" />
          </div>

          {/* Text & Monospace Label */}
          <div className="relative z-10 text-center font-mono space-y-2 mb-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              BMF // SYSTEM INITIALIZING...
            </div>
            <p className="text-sm font-medium text-slate-400">
              Preparing Portfolio Engine
            </p>
          </div>

          {/* Progress Bar & Percentage */}
          <div className="relative z-10 w-64 space-y-2">
            <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[11px] font-mono text-slate-500">
              <span>LOADING ASSETS</span>
              <span className="text-cyan-400 font-bold">{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
