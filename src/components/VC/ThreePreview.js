import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import URDFLoader from 'urdf-loader';

export default function ThreePreview({ angles }) {
  const mountRef = useRef(null);
  const robotRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1e2a31);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(2, 2, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const loader = new URDFLoader();
    loader.packages = 'urdf/';

    loader.load('urdf/robotarm_corrected.urdf', (robot) => {
      robot.rotation.x = Math.PI / 2;
      robot.position.set(0, 0, 0);
      scene.add(robot);
      robotRef.current = robot;
      window.fasmRobot = robot;

      robot.playResetAnimation = () => {
      let t = 0;
      const maxT = 10;
      const originalPos = robot.position.clone();

      const shake = () => {
        if (!robot) return;

        const offset = (t % 2 === 0 ? 1 : -1) * 0.01;
        robot.position.x = originalPos.x + offset;
        robot.position.y = originalPos.y + offset;

        t++;
        if (t < maxT) {
          requestAnimationFrame(shake);
        } else {
          robot.position.copy(originalPos);
        }
      };
      shake();
      };
    });

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
        controls.dispose();
      }
    };
  }, []);

  
  useEffect(() => {
    const robot = robotRef.current;
    if (!robot || !robot.joints) return;

    Object.entries(angles).forEach(([jointName, angleDeg]) => {
      const joint = robot.joints[jointName];
      if (joint) {
        const angleRad = THREE.MathUtils.degToRad(angleDeg);
        joint.setJointValue(angleRad);
      }
    });
  }, [angles]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        maxWidth: '900px',
        height: '500px',
        margin: '0 auto',
        background : 'black',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',
        border: '1px solid #111',
        marginBottom: '3rem',
      }}
    />
  );
}
