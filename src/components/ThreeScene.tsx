
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    
    if (mountRef.current) {
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // Create a geometric shape - abstract polyhedron
    const geometry = new THREE.IcosahedronGeometry(1.5, 0);
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    
    // Create materials with red color
    const material = new THREE.LineBasicMaterial({
      color: 0xE50914,
      transparent: true,
      opacity: 0.8,
      linewidth: 1
    });
    
    // Create mesh and add to scene
    const mesh = new THREE.LineSegments(wireframeGeometry, material);
    scene.add(mesh);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    
    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) / 100;
      mouseY = (event.clientY - windowHalfY) / 100;
    };
    
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth follow of mouse position
      targetX = mouseX * 0.2;
      targetY = mouseY * 0.2;
      
      mesh.rotation.y += 0.005;
      mesh.rotation.x += 0.01;
      
      // Apply mouse movement effect
      mesh.rotation.y += (targetX - mesh.rotation.y) * 0.05;
      mesh.rotation.x += (targetY - mesh.rotation.x) * 0.05;
      
      renderer.render(scene, camera);
    };
    
    // Handle resize
    const handleResize = () => {
      if (mountRef.current) {
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  
  return <div ref={mountRef} className={className} />;
};

export default ThreeScene;
