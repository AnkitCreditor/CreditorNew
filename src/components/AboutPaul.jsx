import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import paul from "../assets/Paul.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const particleVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: [0, 0.8, 0],
    y: [0, -100],
    x: [0, (Math.random() - 0.5) * 100],
    scale: [1, 1.5],
    transition: {
      duration: 2 + Math.random() * 3,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "easeOut"
    }
  })
};

const floatingVariants = {
  float: {
    y: [0, -20],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 0.03,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const CreditorPaulintro = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const particles = Array(20).fill(0);
  const gridItems = Array(64).fill(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const isMobile = windowWidth <= 768;

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "radial-gradient(ellipse at top, #0f172a, #020617)",
        padding: isMobile ? "40px 5%" : "80px 5%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "40px" : "60px",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh"
      }}
    >
      {/* Modern Grid Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
        zIndex: 0,
        opacity: 0.15
      }}>
        {gridItems.map((_, i) => (
          <motion.div
            key={i}
            variants={gridItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ 
              delay: Math.random() * 1,
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3 + Math.random() * 4
            }}
            style={{
              border: "1px solid rgba(125, 211, 252, 0.1)",
              borderRadius: "2px"
            }}
          />
        ))}
      </div>

      {/* Animated Circuit Lines */}
      <svg 
        width="100%" 
        height="100%" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.3
        }}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
          d="M0,100 Q150,50 300,100 T600,100 T900,50 T1200,100"
          stroke="rgba(125, 211, 252, 0.5)"
          strokeWidth="1"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1 }}
          d="M50,300 Q200,250 350,300 T650,300 T950,250 T1250,300"
          stroke="rgba(125, 211, 252, 0.5)"
          strokeWidth="1"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
          d="M100,500 Q250,450 400,500 T700,500 T1000,450 T1300,500"
          stroke="rgba(125, 211, 252, 0.5)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Floating Tech Particles */}
      <AnimatePresence>
        {particles.map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `rgba(125, 211, 252, ${Math.random() * 0.5 + 0.3})`,
              borderRadius: "50%",
              zIndex: 1
            }}
          />
        ))}
      </AnimatePresence>

      {/* Animated Glow Effects */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(2, 132, 199, 0.4), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0
        }}
      />
      
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(125, 211, 252, 0.3), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0
        }}
      />

      {/* LEFT SIDE */}
      <motion.div
        variants={fadeInUp}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "700px",
          justifySelf: "center",
          textAlign: isMobile ? "center" : "left"
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ 
            scale: 1.03,
            textShadow: "0 5px 15px rgba(125, 211, 252, 0.5)"
          }}
          style={{
            fontSize: isMobile ? "2rem" : "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            background: "linear-gradient(90deg, #ffffff 0%, #7dd3fc 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "15px",
            transition: "all 0.3s ease"
          }}
        >
          Paulmichael Rowland
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            marginBottom: "30px"
          }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #7dd3fc, #bae6fd)",
              marginRight: "20px",
              transformOrigin: "left center"
            }}
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "#bae6fd",
              letterSpacing: "2px",
              textTransform: "uppercase"
            }}
          >
            FOUNDER & VISIONARY
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "30px",
            justifyContent: isMobile ? "center" : "flex-start"
          }}
        >
          {["Founder, Creditor Academy", "Business Credit Architect", "Sovereignty Strategist"].map(
            (item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(125, 211, 252, 0.3)"
                }}
                style={{
                  background: "rgba(125, 211, 252, 0.1)",
                  color: "#bae6fd",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: "default",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(125, 211, 252, 0.2)"
                }}
              >
                {item}
              </motion.div>
            )
          )}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#e2e8f0",
            marginBottom: "40px"
          }}
        >
          The architect behind{" "}
          <motion.strong
            initial={{ backgroundSize: "0% 8px" }}
            animate={{ backgroundSize: "100% 8px" }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ 
              backgroundSize: "100% 100%",
              color: "#0f172a",
              padding: "0 5px"
            }}
            style={{
              color: "#7dd3fc",
              fontWeight: 600,
              position: "relative",
              display: "inline-block",
              backgroundImage: "linear-gradient(to right, rgba(125,211,252,0.2), rgba(125,211,252,0.2))",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 88%",
              backgroundSize: "0% 8px",
              transition: "all 0.3s ease",
              cursor: "default"
            }}
          >
            Creditor Academy
          </motion.strong>
          , transforming how entrepreneurs access capital and build financial independence.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            marginBottom: "40px"
          }}
        >
          {[
            { value: "$50K+", label: "Business Credit" },
            { value: "1.27B+", label: "Debt Eliminated" },
            { value: "1000s", label: "Entrepreneurs Helped" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.3 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px rgba(125, 211, 252, 0.3)"
              }}
              style={{
                background: "rgba(15, 23, 42, 0.5)",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "default",
                border: "1px solid rgba(125, 211, 252, 0.1)",
                backdropFilter: "blur(5px)"
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#7dd3fc",
                  lineHeight: 1,
                  transition: "all 0.3s ease"
                }}
              >
                {stat.value}
              </motion.div>
              <div style={{ fontSize: "0.9rem", color: "#bae6fd" }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 15px 35px rgba(125, 211, 252, 0.3)"
          }}
          style={{
            background: "rgba(15, 23, 42, 0.5)",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            position: "relative",
            transition: "all 0.3s ease",
            cursor: "default",
            border: "1px solid rgba(125, 211, 252, 0.1)",
            backdropFilter: "blur(5px)"
          }}
        >
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.8, delay: 1.7 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "5px",
              background: "linear-gradient(to bottom, #7dd3fc, #bae6fd)",
              borderRadius: "5px"
            }}
          />
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "15px",
              paddingLeft: "15px"
            }}
          >
            The Creditor Philosophy
          </h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#e2e8f0",
              paddingLeft: "15px",
              fontStyle: "italic"
            }}
          >
            "True financial freedom comes from understanding the systems of credit and capital.
            We don't just build credit scores - we architect financial sovereignty."
          </motion.p>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        variants={fadeInUp}
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "600px",
          justifySelf: "center"
        }}
      >
        {/* Image with Glow and Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ 
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            maxWidth: "500px",
            perspective: "1000px"
          }}
        >
          {/* Hover Glow Effect */}
          <motion.div
            animate={{
              opacity: isHovered ? 0.8 : 0.4,
              scale: isHovered ? 1.2 : 1
            }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              background: "radial-gradient(circle, rgba(125,211,252,0.6), transparent 70%)",
              borderRadius: "50%",
              zIndex: -1,
              filter: "blur(30px)"
            }}
          />
          
          {/* Floating Animation */}
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{
              position: "relative",
              zIndex: 2
            }}
          >
            <motion.img
              src={paul}
              alt="Paulmichael Rowland"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: isHovered ? 5 : 0 }}
              transition={{ duration: 0.5 }}
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 25px 50px -15px rgba(125,211,252,0.4)",
                border: "10px solid rgba(255,255,255,0.1)",
                transformStyle: "preserve-3d",
                cursor: "pointer",
                backdropFilter: "blur(2px)"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Key Expertise - Animated Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 15px 35px rgba(125, 211, 252, 0.3)"
          }}
          style={{
            background: "rgba(15, 23, 42, 0.5)",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            width: "100%",
            maxWidth: "500px",
            marginTop: "40px",
            position: "relative",
            transition: "all 0.3s ease",
            cursor: "default",
            overflow: "hidden",
            border: "1px solid rgba(125, 211, 252, 0.1)",
            backdropFilter: "blur(5px)"
          }}
        >
          {/* Animated Border */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "3px",
              background: "linear-gradient(to right, #7dd3fc, #bae6fd, #7dd3fc)",
              zIndex: 3
            }}
          />
          
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "#7dd3fc",
              marginBottom: "20px",
              position: "relative"
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Key Expertise:
            </motion.span>
          </h3>
          
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              columns: isMobile ? "1" : "2",
              gap: "20px"
            }}
          >
            {[
              "Business Credit Architecture",
              "Private Wealth Systems",
              "Financial Sovereignty",
              "Credit Repair Mastery",
              "Corporate Structuring",
              "Asset Protection"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ 
                  x: 5,
                  color: "#7dd3fc"
                }}
                style={{
                  marginBottom: "12px",
                  position: "relative",
                  paddingLeft: "25px",
                  fontSize: "1rem",
                  color: "#e2e8f0",
                  transition: "all 0.3s ease"
                }}
              >
                <motion.span
                  animate={{ 
                    rotate: isHovered ? 360 : 0,
                    scale: isHovered ? 1.5 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#7dd3fc",
                    fontWeight: "bold",
                    display: "inline-block"
                  }}
                >
                  •
                </motion.span>{" "}
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CreditorPaulintro;