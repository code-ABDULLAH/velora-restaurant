import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Dish3DViewer({ dish, style = {} }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 1.2, 3.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Master Dish Stage Group
    const dishGroup = new THREE.Group();
    scene.add(dishGroup);

    // 1. Platter Pedestal
    const plateGeo = new THREE.CylinderGeometry(1.4, 1.2, 0.1, 48);
    const goldRimMat = new THREE.MeshPhysicalMaterial({
      color: 0xF59E0B,
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 1.0
    });
    const plateMesh = new THREE.Mesh(plateGeo, goldRimMat);
    dishGroup.add(plateMesh);

    const darkInnerPlateGeo = new THREE.CylinderGeometry(1.25, 1.25, 0.11, 48);
    const darkPlateMat = new THREE.MeshPhysicalMaterial({
      color: 0x181310,
      metalness: 0.2,
      roughness: 0.3
    });
    const darkInnerPlate = new THREE.Mesh(darkInnerPlateGeo, darkPlateMat);
    dishGroup.add(darkInnerPlate);

    // 2. Custom 3D Dish Sculptures based on Dish Category/ID
    let foodMesh;
    let foodGarnish;

    if (dish?.category === 'drinks') {
      // Cocktail Glass Orb
      const drinkGeo = new THREE.SphereGeometry(0.55, 32, 32);
      const drinkMat = new THREE.MeshPhysicalMaterial({
        color: 0xE11D48,
        transmission: 0.9,
        transparent: true,
        opacity: 0.85,
        roughness: 0.05
      });
      foodMesh = new THREE.Mesh(drinkGeo, drinkMat);
      foodMesh.position.y = 0.55;

      const ringGeo = new THREE.TorusGeometry(0.8, 0.04, 16, 64);
      const ringMat = new THREE.MeshPhysicalMaterial({ color: 0xFDE68A, metalness: 0.8 });
      foodGarnish = new THREE.Mesh(ringGeo, ringMat);
      foodGarnish.rotation.x = Math.PI / 3;
      foodGarnish.position.y = 0.55;
      dishGroup.add(foodGarnish);
    } else if (dish?.category === 'desserts') {
      // Souffle / Matcha Mousse Dome
      const dessertGeo = new THREE.DodecahedronGeometry(0.55, 2);
      const dessertMat = new THREE.MeshPhysicalMaterial({
        color: dish.id === 8 ? 0x10B981 : 0x78350F,
        metalness: 0.2,
        roughness: 0.4,
        clearcoat: 0.8
      });
      foodMesh = new THREE.Mesh(dessertGeo, dessertMat);
      foodMesh.position.y = 0.5;

      const crownGeo = new THREE.TorusKnotGeometry(0.65, 0.04, 64, 16, 2, 3);
      foodGarnish = new THREE.Mesh(crownGeo, goldRimMat);
      foodGarnish.position.y = 0.5;
      dishGroup.add(foodGarnish);
    } else {
      // Wagyu / Black Cod / Savory Masterpiece
      const savoryGeo = new THREE.IcosahedronGeometry(0.58, 2);
      const savoryMat = new THREE.MeshPhysicalMaterial({
        color: 0x9F1239,
        metalness: 0.35,
        roughness: 0.3,
        clearcoat: 0.95
      });
      foodMesh = new THREE.Mesh(savoryGeo, savoryMat);
      foodMesh.position.y = 0.5;

      const goldRibbonGeo = new THREE.TorusKnotGeometry(0.65, 0.05, 80, 16, 3, 4);
      foodGarnish = new THREE.Mesh(goldRibbonGeo, goldRimMat);
      foodGarnish.position.y = 0.5;
      dishGroup.add(foodGarnish);
    }

    dishGroup.add(foodMesh);

    // 3. Floating Culinary Steam & Gold Flakes
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const amber = new THREE.Color(0xF59E0B);
    const cream = new THREE.Color(0xFDE68A);

    for (let i = 0; i < particleCount; i++) {
      const radius = 0.3 + Math.random() * 1.2;
      const angle = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = 0.1 + Math.random() * 1.6;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      const c = Math.random() > 0.4 ? amber : cream;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    dishGroup.add(particles);

    // 4. Lights
    const ambLight = new THREE.AmbientLight(0xFFF7ED, 1.0);
    scene.add(ambLight);

    const amberLight = new THREE.PointLight(0xFDE68A, 3.2, 10);
    amberLight.position.set(2.5, 3.5, 3);
    scene.add(amberLight);

    const wineLight = new THREE.PointLight(0xE11D48, 2.0, 10);
    wineLight.position.set(-3, -1, 2);
    scene.add(wineLight);

    // 5. Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    container.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      foodMesh.rotation.y = t * 0.4;
      if (foodGarnish) {
        foodGarnish.rotation.x = t * 0.3;
        foodGarnish.rotation.y = t * 0.45;
      }
      particles.rotation.y = t * 0.08;

      dishGroup.rotation.y = t * 0.25 + mouseX * 0.4;
      dishGroup.rotation.x = 0.2 + mouseY * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);

      plateGeo.dispose();
      goldRimMat.dispose();
      darkInnerPlateGeo.dispose();
      darkPlateMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [dish]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: 'grab',
        ...style
      }}
    />
  );
}
