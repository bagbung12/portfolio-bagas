import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Main 3D Group: PISCES SWIMMING FISH SCENE
    const piscesSceneGroup = new THREE.Group();
    scene.add(piscesSceneGroup);

    // Function to build a procedural 3D Koi / Pisces Fish with flexible tail & fins
    const createFish = (primaryColor, emissiveColor) => {
      const fishGroup = new THREE.Group();

      // Materials
      const bodyMat = new THREE.MeshPhongMaterial({
        color: primaryColor,
        emissive: emissiveColor,
        specular: 0x38bdf8,
        shininess: 90,
        flatShading: false,
      });

      const finMat = new THREE.MeshPhongMaterial({
        color: primaryColor,
        transparent: true,
        opacity: 0.65,
        side: THREE.DoubleSide,
        shininess: 100,
      });

      const eyeMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });

      // Body (Segmented for swimming wiggle)
      const bodySegments = [];
      const segmentCount = 6;
      const baseRadius = 0.55;

      for (let i = 0; i < segmentCount; i++) {
        // Taper radius: Head (thick), Middle (thickest), Tail (thin)
        const progress = i / (segmentCount - 1);
        const radius = Math.sin(progress * Math.PI) * baseRadius + 0.15;
        const geo = new THREE.SphereGeometry(radius, 16, 12);
        geo.scale(1, 1.2, 0.85); // Flatten slightly on sides

        const mesh = new THREE.Mesh(geo, bodyMat);
        mesh.position.x = -i * 0.45; // Spaced along X axis
        fishGroup.add(mesh);
        bodySegments.push(mesh);
      }

      // Head (Front Cone / Cap)
      const headGeo = new THREE.ConeGeometry(0.55, 0.8, 16);
      headGeo.rotateZ(-Math.PI / 2);
      const headMesh = new THREE.Mesh(headGeo, bodyMat);
      headMesh.position.x = 0.4;
      fishGroup.add(headMesh);

      // Eyes
      const eyeGeo = new THREE.SphereGeometry(0.09, 8, 8);
      const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
      eyeL.position.set(0.45, 0.18, 0.38);
      fishGroup.add(eyeL);

      const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
      eyeR.position.set(0.45, 0.18, -0.38);
      fishGroup.add(eyeR);

      // Dorsal Fin (Top)
      const dorsalShape = new THREE.Shape();
      dorsalShape.moveTo(0, 0);
      dorsalShape.quadraticCurveTo(-0.4, 0.8, -1.0, 0.6);
      dorsalShape.quadraticCurveTo(-0.5, 0.2, 0, 0);

      const dorsalGeo = new THREE.ShapeGeometry(dorsalShape);
      const dorsalMesh = new THREE.Mesh(dorsalGeo, finMat);
      dorsalMesh.position.set(-0.2, 0.5, 0);
      fishGroup.add(dorsalMesh);

      // Pectoral Fins (Sides)
      const pecShape = new THREE.Shape();
      pecShape.moveTo(0, 0);
      pecShape.quadraticCurveTo(0.3, -0.6, -0.4, -0.8);
      pecShape.quadraticCurveTo(-0.3, -0.2, 0, 0);

      const pecGeo = new THREE.ShapeGeometry(pecShape);
      const pecL = new THREE.Mesh(pecGeo, finMat);
      pecL.position.set(0.1, -0.1, 0.4);
      pecL.rotation.x = Math.PI / 4;
      fishGroup.add(pecL);

      const pecR = new THREE.Mesh(pecGeo, finMat);
      pecR.position.set(0.1, -0.1, -0.4);
      pecR.rotation.x = -Math.PI / 4;
      fishGroup.add(pecR);

      // Tail Fin (Animated)
      const tailShape = new THREE.Shape();
      tailShape.moveTo(0, 0);
      tailShape.quadraticCurveTo(-0.6, 0.7, -1.2, 0.9);
      tailShape.quadraticCurveTo(-0.9, 0, -1.2, -0.9);
      tailShape.quadraticCurveTo(-0.6, -0.7, 0, 0);

      const tailGeo = new THREE.ShapeGeometry(tailShape);
      const tailMesh = new THREE.Mesh(tailGeo, finMat);
      
      // Attach tail to last body segment
      const lastSeg = bodySegments[segmentCount - 1];
      tailMesh.position.set(-0.3, 0, 0);
      lastSeg.add(tailMesh);

      return { fishGroup, bodySegments, tailMesh };
    };

    // Create 2 Fish in Pisces Formation
    // Fish 1: Cyan / Silver Metallic
    const fish1 = createFish(0x06b6d4, 0x092540);
    piscesSceneGroup.add(fish1.fishGroup);

    // Fish 2: Electric Indigo / Violet Metallic
    const fish2 = createFish(0x818cf8, 0x1e1b4b);
    piscesSceneGroup.add(fish2.fishGroup);

    // 3. Glowing Orbital Ring Path
    const orbitRadius = 4.2;
    const ringGeo = new THREE.TorusGeometry(orbitRadius, 0.08, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.5;
    piscesSceneGroup.add(ringMesh);

    // 4. Floating 3D Bubble / Star Particles
    const particlesCount = 260;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 45;
      positions[i + 1] = (Math.random() - 0.5) * 35;
      positions[i + 2] = (Math.random() - 0.5) * 25;

      colors[i] = 0.02 + Math.random() * 0.3;     // R
      colors[i + 1] = 0.7 + Math.random() * 0.3; // G (Cyan)
      colors[i + 2] = 0.95 + Math.random() * 0.05; // B
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 2.5);
    dirLight1.position.set(10, 10, 10);
    scene.add(dirLight1);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 3, 50);
    pointLight1.position.set(-8, 8, 8);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x6366f1, 2.5, 50);
    pointLight2.position.set(8, -8, -8);
    scene.add(pointLight2);

    // 6. Interactive Mouse Motion Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0008;
      mouseY = (event.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 7. Animation Loop (Swimming Physics & Wiggle)
    let clock = new THREE.Clock();
    let reqId;

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const swimSpeed = 1.2;
      const wiggleSpeed = 10;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Mouse interactive tilt for entire Pisces aquarium scene
      piscesSceneGroup.rotation.y = targetX * 0.8;
      piscesSceneGroup.rotation.x = targetY * 0.8;

      // --- FISH 1 SWIMMING ORBIT & BODY WIGGLE ---
      const angle1 = elapsedTime * swimSpeed;
      const x1 = Math.cos(angle1) * orbitRadius;
      const y1 = Math.sin(angle1) * orbitRadius * 0.6;
      const z1 = Math.sin(angle1 * 2) * 1.5;

      fish1.fishGroup.position.set(x1, y1, z1);
      // Tangent orientation (facing swimming direction)
      const tangent1Angle = angle1 + Math.PI / 2;
      fish1.fishGroup.rotation.z = tangent1Angle;
      fish1.fishGroup.rotation.y = Math.cos(angle1) * 0.4;

      // Fish 1 Segmented Spine Wiggle Animation
      fish1.bodySegments.forEach((seg, idx) => {
        const wave = Math.sin(elapsedTime * wiggleSpeed - idx * 0.6) * 0.18;
        seg.position.z = wave;
        seg.rotation.y = wave * 0.5;
      });
      fish1.tailMesh.rotation.y = Math.sin(elapsedTime * wiggleSpeed * 1.2) * 0.45;

      // --- FISH 2 SWIMMING ORBIT & BODY WIGGLE (Opposite Yin-Yang Circle) ---
      const angle2 = angle1 + Math.PI; // 180 degrees opposite
      const x2 = Math.cos(angle2) * orbitRadius;
      const y2 = Math.sin(angle2) * orbitRadius * 0.6;
      const z2 = Math.sin(angle2 * 2) * -1.5;

      fish2.fishGroup.position.set(x2, y2, z2);
      const tangent2Angle = angle2 + Math.PI / 2;
      fish2.fishGroup.rotation.z = tangent2Angle;
      fish2.fishGroup.rotation.y = Math.cos(angle2) * -0.4;

      // Fish 2 Segmented Spine Wiggle Animation
      fish2.bodySegments.forEach((seg, idx) => {
        const wave = Math.sin(elapsedTime * wiggleSpeed - idx * 0.6 + Math.PI) * 0.18;
        seg.position.z = wave;
        seg.rotation.y = wave * 0.5;
      });
      fish2.tailMesh.rotation.y = Math.sin(elapsedTime * wiggleSpeed * 1.2 + Math.PI) * 0.45;

      // Particles orbit
      particlesMesh.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80 md:opacity-95"
      aria-hidden="true"
    />
  );
}
