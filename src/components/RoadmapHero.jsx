// src/components/RoadmapHero.jsx
import React, { useRef, Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { EffectComposer, Glitch } from '@react-three/postprocessing';
import { useScroll, useTransform, motion, useAnimation, useInView } from 'framer-motion';

const RoadmapHero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: false, amount: 0.5 });
  const controls = useAnimation();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // ---------------- Typewriter Effect ----------------
  const fullText = "The Roadmap Series";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let typingTimeout;

    const handleTyping = () => {
      const updatedText = fullText.substring(
        0,
        displayedText.length + (isDeleting ? -1 : 1)
      );
      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        typingTimeout = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
      }

      setTypingSpeed(isDeleting ? 60 : 120);
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.8
      }
    }
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden isolate"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4895e4] via-[#3a7bc8] to-[#1a4d8c] z-0" />

      {/* Gold Accent Glow Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full mix-blend-overlay opacity-20 blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full mix-blend-overlay opacity-15 blur-xl animate-float delay-1000" />
      </div>

      {/* 3D/Shader Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas ref={canvasRef}>
          <Suspense fallback={null}>
            <AnimatedShaderPlane />
            <Particles />
            <EffectComposer>
              <Glitch
                delay={[3.0, 5.0]}
                duration={[0.2, 0.4]}
                strength={[0.1, 0.3]}
                ratio={0.1}
                active
              />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
        style={{ y, opacity }}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Animated Main Heading */}
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 flex items-center"
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 bg-white ml-1"
            />
          </motion.h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl text-yellow-200 mb-8 max-w-3xl"
          variants={itemVariants}
        >
          Start Your Journey to Private Wealth, Legal Freedom & Credit Power
        </motion.p>

        {/* Author line */}
        <motion.p
          className="text-sm text-yellow-300 mb-12"
          variants={itemVariants}
        >
          by Paulmicheal Rowland, Founder of Creditor Academy
        </motion.p>

        {/* Boxed description */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-4xl border border-white/20"
          variants={boxVariants}
        >
          <motion.p 
            className="text-white text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            The Roadmap Series is your step-by-step blueprint to exit the public system,
            reclaim your legal identity, and unlock powerful credit and business tools —
            all while building wealth through private trust structures and lawful commerce.
          </motion.p>

          <motion.p 
            className="text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            This self-paced, results-focused training series is designed for entrepreneurs,
            freedom seekers, and anyone ready to take back control of their legal and
            financial future.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="animate-bounce w-6 h-10 border-2 border-yellow-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-yellow-300 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ---------------------- Shader Plane ---------------------- */
const AnimatedShaderPlane = () => {
  const meshRef = useRef();
  const shaderRef = useRef();
  const { viewport } = useThree();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
      meshRef.current.position.x = Math.cos(time * 0.3) * 0.1;
      meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      meshRef.current.rotation.y = Math.cos(time * 0.1) * 0.1;
    }

    if (shaderRef.current) {
      shaderRef.current.uniforms.time.value = time;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, -10]}
      scale={[viewport.width, viewport.height, 1]}
    >
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        ref={shaderRef}
        uniforms={{
          time: { value: 0 },
          color1: { value: new THREE.Color('#4895e4') },
          color2: { value: new THREE.Color('#fbbf24') },
          resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        }}
        fragmentShader={`/* shader code unchanged */`}
        vertexShader={`/* shader code unchanged */`}
        transparent
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

/* ---------------------- Particles ---------------------- */
const Particles = () => {
  const count = 80;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }
  const pointsRef = useRef();

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#156e7eff" transparent opacity={0.4} />
    </points>
  );
};

export default RoadmapHero;