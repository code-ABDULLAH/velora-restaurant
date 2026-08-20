import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas({ style = {}, interactive = true }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 1. Central 3D Geometry - Luxury Torus Knot (Sculptural Culinary Object)
    const knotGeometry = new THREE.TorusKnotGeometry(1.2, 0.32, 128, 32, 2, 3);
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xD4AF37,
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      wireframe: false,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, goldMaterial);
    scene.add(knotMesh);

    // Outer Glass Outer Ring
    const ringGeometry = new THREE.TorusGeometry(2.3, 0.05, 32, 100);
    const wineMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x722F37,
      metalness: 0.4,
      roughness: 0.2,
      transmission: 0.6,
      transparent: true,
      opacity: 0.7,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, wineMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    // 2. Floating 3D Particle Field (Gold & Wine Stars)
    const particleCount = prefersReducedMotion ? 40 : 150;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xD4AF37);
    const wineColor = new THREE.Color(0x9E3D48);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const mixColor = Math.random() > 0.4 ? goldColor : wineColor;
      colors[i * 3] = mixColor.r;
      colors[i * 3 + 1] = mixColor.g;
      colors[i * 3 + 2] = mixColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xF5E096, 3, 20);
    goldPointLight.position.set(4, 4, 5);
    scene.add(goldPointLight);

    const winePointLight = new THREE.PointLight(0x722F37, 2, 20);
    winePointLight.position.set(-4, -4, 3);
    scene.add(winePointLight);

    // 4. Mouse Interactive Parallax Tracking
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Loop
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      if (!prefersReducedMotion) {
        // Slow organic rotation
        knotMesh.rotation.x = elapsedTime * 0.25;
        knotMesh.rotation.y = elapsedTime * 0.35;

        ringMesh.rotation.z = elapsedTime * 0.15;
        ringMesh.rotation.y = elapsedTime * 0.2;

        particles.rotation.y = elapsedTime * 0.05;
      }

      // Smooth camera interpolation for 3D parallax mouse tilt
      targetX += (mouseX * 0.6 - targetX) * 0.05;
      targetY += (mouseY * 0.6 - targetY) * 0.05;

      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // 6. Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      knotGeometry.dispose();
      goldMaterial.dispose();
      ringGeometry.dispose();
      wineMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: 'grab',
        ...style,
      }}
    />
  );
}
