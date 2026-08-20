import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Eye, RotateCw } from 'lucide-react';

export default function ThreeCanvas({ style = {}, interactive = true }) {
  const mountRef = useRef(null);
  const [activeModel, setActiveModel] = useState('wagyu'); // 'wagyu' | 'nebula' | 'matcha'
  const [isLidOpen, setIsLidOpen] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  // References to communicate with Three.js scene from React state
  const sceneStateRef = useRef({
    activeModel: 'wagyu',
    isLidOpen: false,
    autoRotate: true,
    triggerBurst: false,
  });

  useEffect(() => {
    sceneStateRef.current.activeModel = activeModel;
    sceneStateRef.current.isLidOpen = isLidOpen;
    sceneStateRef.current.autoRotate = autoRotate;
  }, [activeModel, isLidOpen, autoRotate]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.4, 5.2);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 3. Main Stage Group (Contains Platter, Food, Cloche)
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);
    stageGroup.position.y = -0.3;

    // A. Luxury Platter Pedestal (Warm Gold & Roasted Espresso Marble)
    const plateGeo = new THREE.CylinderGeometry(2.1, 1.8, 0.15, 64);
    const goldRimMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xF59E0B,
      metalness: 0.92,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95
    });
    const platterMesh = new THREE.Mesh(plateGeo, goldRimMaterial);
    platterMesh.receiveShadow = true;
    stageGroup.add(platterMesh);

    // Inner Truffle Obsidian Plate Surface
    const innerPlateGeo = new THREE.CylinderGeometry(1.85, 1.85, 0.16, 64);
    const darkMarbleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x181310,
      metalness: 0.3,
      roughness: 0.25,
      clearcoat: 0.8
    });
    const innerPlate = new THREE.Mesh(innerPlateGeo, darkMarbleMaterial);
    stageGroup.add(innerPlate);

    // B. Dish 1: 24K Saffron Wagyu Sculpture (Faceted Gilded Organic Core + Saffron Emulsion Torus)
    const wagyuGroup = new THREE.Group();
    stageGroup.add(wagyuGroup);

    const wagyuCoreGeo = new THREE.IcosahedronGeometry(0.85, 2);
    const wagyuMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x881337,
      emissive: 0x33060C,
      metalness: 0.4,
      roughness: 0.35,
      clearcoat: 0.9
    });
    const wagyuCore = new THREE.Mesh(wagyuCoreGeo, wagyuMaterial);
    wagyuCore.position.y = 0.65;
    wagyuGroup.add(wagyuCore);

    // Gold Leaf Veins & Flakes
    const goldRibbonGeo = new THREE.TorusKnotGeometry(0.95, 0.08, 100, 16, 2, 3);
    const goldRibbon = new THREE.Mesh(goldRibbonGeo, goldRimMaterial);
    goldRibbon.position.y = 0.65;
    wagyuGroup.add(goldRibbon);

    // C. Dish 2: Velvet Nebula Cocktail (Spherical Glass Orb + Saturn Ring Smoke)
    const nebulaGroup = new THREE.Group();
    nebulaGroup.visible = false;
    stageGroup.add(nebulaGroup);

    const cocktailOrbGeo = new THREE.SphereGeometry(0.8, 32, 32);
    const cocktailMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xE11D48,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.88,
      transparent: true,
      opacity: 0.9,
      ior: 1.45
    });
    const cocktailOrb = new THREE.Mesh(cocktailOrbGeo, cocktailMaterial);
    cocktailOrb.position.y = 0.7;
    nebulaGroup.add(cocktailOrb);

    const saturnRingGeo = new THREE.TorusGeometry(1.25, 0.06, 16, 100);
    const ringMat = new THREE.MeshPhysicalMaterial({
      color: 0xFDE68A,
      emissive: 0xF59E0B,
      metalness: 0.8,
      roughness: 0.2
    });
    const saturnRing = new THREE.Mesh(saturnRingGeo, ringMat);
    saturnRing.rotation.x = Math.PI / 2.8;
    saturnRing.position.y = 0.7;
    nebulaGroup.add(saturnRing);

    // D. Dish 3: Botanical Emerald Zen Dome
    const matchaGroup = new THREE.Group();
    matchaGroup.visible = false;
    stageGroup.add(matchaGroup);

    const matchaGeo = new THREE.OctahedronGeometry(0.82, 3);
    const matchaMat = new THREE.MeshPhysicalMaterial({
      color: 0x10B981,
      metalness: 0.3,
      roughness: 0.2,
      clearcoat: 1.0,
      transmission: 0.4
    });
    const matchaMesh = new THREE.Mesh(matchaGeo, matchaMat);
    matchaMesh.position.y = 0.65;
    matchaGroup.add(matchaMesh);

    const matchaOrbitRingGeo = new THREE.TorusGeometry(1.15, 0.04, 16, 64);
    const matchaRing = new THREE.Mesh(matchaOrbitRingGeo, goldRimMaterial);
    matchaRing.rotation.x = Math.PI / 4;
    matchaRing.position.y = 0.65;
    matchaGroup.add(matchaRing);

    // E. Luxury Glass Cloche Dome with Gold Finial
    const clocheGroup = new THREE.Group();
    stageGroup.add(clocheGroup);
    clocheGroup.position.y = 0.15;

    const clocheDomeGeo = new THREE.SphereGeometry(1.5, 48, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    const clocheGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFFDF7,
      metalness: 0.05,
      roughness: 0.08,
      transmission: 0.92,
      transparent: true,
      opacity: 0.85,
      ior: 1.5,
      thickness: 0.4,
      reflectivity: 0.9
    });
    const clocheDome = new THREE.Mesh(clocheDomeGeo, clocheGlassMat);
    clocheGroup.add(clocheDome);

    // Cloche Gold Knob Handle
    const knobGeo = new THREE.SphereGeometry(0.18, 24, 24);
    const clocheKnob = new THREE.Mesh(knobGeo, goldRimMaterial);
    clocheKnob.position.y = 1.55;
    clocheGroup.add(clocheKnob);

    // 4. 3D Floating Gold Flakes & Aromatic Steam Particle Swirls
    const particleCount = prefersReducedMotion ? 60 : 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const amberGold = new THREE.Color(0xF59E0B);
    const saffronWine = new THREE.Color(0xE11D48);
    const lightVanilla = new THREE.Color(0xFDE68A);

    for (let i = 0; i < particleCount; i++) {
      const radius = 0.5 + Math.random() * 2.2;
      const angle = Math.random() * Math.PI * 2;
      particlePos[i * 3] = Math.cos(angle) * radius;
      particlePos[i * 3 + 1] = (Math.random() - 0.2) * 3.5;
      particlePos[i * 3 + 2] = Math.sin(angle) * radius;

      const pick = Math.random();
      const col = pick > 0.5 ? amberGold : pick > 0.2 ? saffronWine : lightVanilla;
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    stageGroup.add(particleSystem);

    // 5. Dynamic Studio Lighting (Warm Amber Key Light + Rich Cabernet Rim Light)
    const ambientLight = new THREE.AmbientLight(0xFFF7ED, 0.9);
    scene.add(ambientLight);

    const amberKeyLight = new THREE.PointLight(0xFDE68A, 3.5, 18);
    amberKeyLight.position.set(3.5, 4.5, 4.0);
    scene.add(amberKeyLight);

    const wineRimLight = new THREE.PointLight(0xE11D48, 2.8, 18);
    wineRimLight.position.set(-4.0, -2.0, 3.0);
    scene.add(wineRimLight);

    const goldSpotLight = new THREE.SpotLight(0xF59E0B, 4, 15, Math.PI / 4, 0.4, 1);
    goldSpotLight.position.set(0, 5.5, 2.5);
    scene.add(goldSpotLight);

    // 6. Mouse Tracking & Interactive Drag Orbit
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let manualRotationY = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      previousPointerX = e.clientX;
    };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - previousPointerX;
        manualRotationY += deltaX * 0.008;
        previousPointerX = e.clientX;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 7. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const state = sceneStateRef.current;

      // Model Switch Visibility
      wagyuGroup.visible = state.activeModel === 'wagyu';
      nebulaGroup.visible = state.activeModel === 'nebula';
      matchaGroup.visible = state.activeModel === 'matcha';

      // Cloche Smooth Lift Animation
      const targetLidY = state.isLidOpen ? 2.2 : 0.15;
      clocheGroup.position.y += (targetLidY - clocheGroup.position.y) * 0.08;
      clocheGroup.rotation.z += ((state.isLidOpen ? 0.25 : 0) - clocheGroup.rotation.z) * 0.08;

      if (!prefersReducedMotion) {
        // Organic Internal Rotations
        wagyuCore.rotation.y = elapsedTime * 0.35;
        goldRibbon.rotation.x = elapsedTime * 0.45;
        goldRibbon.rotation.y = elapsedTime * 0.3;

        cocktailOrb.rotation.y = elapsedTime * 0.4;
        saturnRing.rotation.z = elapsedTime * 0.5;

        matchaMesh.rotation.y = elapsedTime * 0.3;
        matchaMesh.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;
        matchaRing.rotation.z = elapsedTime * 0.4;

        // Particle Swirl Animation
        const positions = particleGeo.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 1] += 0.008;
          if (positions[i * 3 + 1] > 3.0) {
            positions[i * 3 + 1] = -0.5;
          }
        }
        particleGeo.attributes.position.needsUpdate = true;
        particleSystem.rotation.y = elapsedTime * 0.06;

        // Automatic Stage Spin
        if (state.autoRotate && !isDragging) {
          manualRotationY += 0.005;
        }
      }

      // Parallax & Smooth Camera Tilt
      targetX += (mouseX * 0.5 - targetX) * 0.05;
      targetY += (mouseY * 0.35 - targetY) * 0.05;

      stageGroup.rotation.y = manualRotationY + targetX * 0.4;
      stageGroup.rotation.x = targetY * 0.3;

      camera.position.x = targetX * 0.4;
      camera.position.y = 1.4 + targetY * 0.3;
      camera.lookAt(0, 0.4, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 8. Handle Resize
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
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose Geometries & Materials
      plateGeo.dispose();
      goldRimMaterial.dispose();
      innerPlateGeo.dispose();
      darkMarbleMaterial.dispose();
      wagyuCoreGeo.dispose();
      wagyuMaterial.dispose();
      goldRibbonGeo.dispose();
      cocktailOrbGeo.dispose();
      cocktailMaterial.dispose();
      saturnRingGeo.dispose();
      ringMat.dispose();
      matchaGeo.dispose();
      matchaMat.dispose();
      clocheDomeGeo.dispose();
      clocheGlassMat.dispose();
      knobGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* 3D WebGL Canvas Mount Container */}
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

      {/* Interactive 3D Controls Overlay Bar */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          right: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        {/* Dish Switcher Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', pointerEvents: 'auto' }}>
          {[
            { id: 'wagyu', label: '24K Wagyu' },
            { id: 'nebula', label: 'Velvet Nebula' },
            { id: 'matcha', label: 'Zen Matcha' }
          ].map(dish => (
            <button
              key={dish.id}
              onClick={() => setActiveModel(dish.id)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                border: '1px solid',
                borderColor: activeModel === dish.id ? 'var(--accent-gold)' : 'var(--border-subtle)',
                backgroundColor: activeModel === dish.id ? 'var(--accent-gold-light)' : 'rgba(24, 20, 17, 0.75)',
                color: activeModel === dish.id ? 'var(--accent-gold-bright)' : 'var(--text-secondary)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.25s ease'
              }}
            >
              {dish.label}
            </button>
          ))}
        </div>

        {/* Cloche & Auto-rotate Action Toggles */}
        <div style={{ display: 'flex', gap: '0.5rem', pointerEvents: 'auto' }}>
          <button
            onClick={() => setIsLidOpen(!isLidOpen)}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: isLidOpen ? 'var(--accent-wine-light)' : 'rgba(24, 20, 17, 0.75)',
              border: isLidOpen ? '1px solid var(--accent-wine-bright)' : '1px solid var(--border-gold)',
              color: isLidOpen ? '#FDA4AF' : 'var(--accent-gold-bright)',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.25s ease'
            }}
            title="Lift or close the gourmet glass cloche"
          >
            <Sparkles size={13} />
            <span>{isLidOpen ? 'Cover Dish' : 'Lift Cloche'}</span>
          </button>

          <button
            onClick={() => setAutoRotate(!autoRotate)}
            style={{
              padding: '0.4rem',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: autoRotate ? 'var(--accent-gold-light)' : 'rgba(24, 20, 17, 0.75)',
              border: '1px solid var(--border-gold)',
              color: autoRotate ? 'var(--accent-gold-bright)' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)'
            }}
            title={autoRotate ? "Pause Auto-Rotate" : "Start Auto-Rotate"}
          >
            <RotateCw size={14} style={{ transform: autoRotate ? 'rotate(0deg)' : 'rotate(45deg)', transition: 'transform 0.3s ease' }} />
          </button>
        </div>
      </div>

      {/* 3D Interaction Hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '16px',
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-display)',
          backgroundColor: 'rgba(12, 10, 9, 0.7)',
          padding: '0.25rem 0.7rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-subtle)',
          pointerEvents: 'none',
          backdropFilter: 'blur(6px)'
        }}
      >
        ✦ Drag to 3D Orbit • Hover for Dynamic Tilt
      </div>
    </div>
  );
}
