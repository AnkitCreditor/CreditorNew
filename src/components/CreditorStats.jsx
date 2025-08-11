import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { FaEye, FaCircle, FaUsers, FaYoutube } from "react-icons/fa";
import { gsap } from "gsap";

const API_KEY = "AIzaSyCJKDRtak743c9fOKLhZYnnZi_PncFjov0";
const CHANNEL_ID = "UCl_FM9KmhMA-DV6OTgr42Dw";

const CreditorStats = () => {
  const [youtubeData, setYoutubeData] = useState({ viewCount: 0, subscriberCount: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const particlesRef = useRef([]);

  useEffect(() => {
    const fetchYouTubeStats = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const data = await res.json();
        const stats = data.items[0].statistics;
        setYoutubeData({
          viewCount: parseInt(stats.viewCount, 10),
          subscriberCount: parseInt(stats.subscriberCount, 10),
        });
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching YouTube stats:", error);
        setIsLoaded(true);
      }
    };
    fetchYouTubeStats();
  }, []);

  // Background Animation
  useEffect(() => {
    if (!sectionRef.current) return;
    const particles = [];
    const particleCount = 25;
    const colors = ["#00f2fe", "#00ff9d", "#9d50ff", "#ff3cac"];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      const size = Math.random() * 6 + 2;
      const isLine = Math.random() > 0.7;

      particle.style.position = "absolute";
      particle.style.width = isLine ? `${Math.random() * 120 + 60}px` : `${size}px`;
      particle.style.height = isLine ? "1px" : `${size}px`;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = isLine ? "0" : "50%";
      particle.style.opacity = "0.15";
      particle.style.filter = "blur(0.5px)";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      sectionRef.current.appendChild(particle);
      particles.push(particle);

      gsap.to(particle, {
        x: `${Math.random() * 200 - 100}px`,
        y: `${Math.random() * 200 - 100}px`,
        duration: Math.random() * 15 + 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    particlesRef.current = particles;
    return () => particles.forEach(p => p.remove());
  }, []);

  const Counter = ({ target, trigger }) => {
    const count = useMotionValue(0);
    const display = useTransform(count, val => Math.floor(val).toLocaleString());

    useEffect(() => {
      if (trigger) {
        const controls = animate(count, target, {
          duration: 2,
          ease: [0.25, 1, 0.5, 1]
        });
        return () => controls.stop();
      }
    }, [trigger, target]);

    return (
      <motion.div style={{ fontSize: "30px", fontWeight: 700, color: "#fff" }}>
        {display}
      </motion.div>
    );
  };

  const stats = [
    { icon: <FaEye size={28} />, label: "YouTube Views", value: youtubeData.viewCount, color: "#00d0ff" },
    { icon: <FaCircle size={20} />, label: "Live Learners", value: 1673, color: "#00ffbb" },
    { icon: <FaUsers size={28} />, label: "Total Debt Eliminated", value: 1275432, color: "#ffe054" },
    { icon: <FaYoutube size={28} />, label: "YouTube Subscribers", value: youtubeData.subscriberCount, color: "#ff2929" }
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "35px",
        background: "linear-gradient(135deg, #0b1622, #1c2a3a, #0b1622)",
      }}
    >
      {/* Aurora Background Layers */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: `
          radial-gradient(circle at 20% 30%, rgba(0,255,180,0.15), transparent 60%),
          radial-gradient(circle at 80% 70%, rgba(0,200,255,0.15), transparent 60%),
          linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%)
        `,
        backgroundSize: "200% 200%",
        animation: "auroraMove 20s ease-in-out infinite",
        zIndex: 0
      }}></div>

      <style>{`
        @keyframes auroraMove {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>

      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          whileHover={{
            scale: 1.08,
            rotateX: 4,
            rotateY: -4,
            transition: { duration: 0.18, ease: "easeOut" }
          }}
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
            borderRadius: "20px",
            padding: "35px 45px",
            minWidth: "230px",
            textAlign: "center",
            border: `1px solid ${stat.color}66`,
            boxShadow: `0 0 25px ${stat.color}44`,
            position: "relative",
            zIndex: 2,
            cursor: "pointer"
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.2 }}
            style={{ marginBottom: "16px", color: stat.color }}
          >
            {stat.icon}
          </motion.div>
          {isLoaded ? (
            <Counter target={stat.value} trigger={isInView} />
          ) : (
            <div style={{ fontSize: "30px", fontWeight: 700, color: "#fff" }}>Loading...</div>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 + i * 0.15 }}
            style={{ fontSize: "15px", marginTop: "8px", color: "#ddd" }}
          >
            {stat.label}
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default CreditorStats;
