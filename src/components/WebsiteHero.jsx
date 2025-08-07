import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import task1 from "../assets/task1.png";
import task2 from "../assets/task2.png";
import task3 from "../assets/task3.png";
import task4 from "../assets/task4.png";

const tasks = [
  { id: 1, title: "Ticket", desc: "Integrate Slack, Linear, and Jira", img: task1 },
  { id: 2, title: "Plan", desc: "Quickly review the proposal", img: task2 },
  { id: 3, title: "Test", desc: "Devin tests changes automatically", img: task3 },
  { id: 4, title: "PR", desc: "Review changes in app", img: task4 },
];

const WebsiteHero = () => {
  const [activeTask, setActiveTask] = useState(tasks[0]);

  return (
    <div style={{
      background: "linear-gradient(to bottom right, #0d1117, #0c0f1a)",
      color: "white",
      minHeight: "100vh",
      padding: "80px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        maxWidth: "1280px",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        alignItems: "center"
      }}>
        {/* LEFT SECTION */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1 style={{
            fontSize: "48px",
            fontWeight: "300",
            lineHeight: "1.2"
          }}>
            <span style={{ color: "#00d1b2", fontWeight: "500" }}>Creditor</span>, Yours Own <br />
            <span style={{ fontWeight: "300" }}>
              <Typewriter
                words={["Website Developer", "web dev", "site builder"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p style={{
            fontSize: "16px",
            color: "#a0aec0",
            maxWidth: "400px"
          }}>
            Crush your backlog with your personal AI engineering team.
          </p>

          <button style={{
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "12px 24px",
            fontSize: "16px",
            borderRadius: "10px",
            border: "none",
            width: "fit-content",
            cursor: "pointer"
          }}>
            Start building
          </button>

          {/* TASK CARDS */}
          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {tasks.map((task) => (
              <div
                key={task.id}
                onMouseEnter={() => setActiveTask(task)}
                style={{
                  backgroundColor: activeTask.id === task.id ? "#1f2937" : "transparent",
                  border: "1px solid #2d3748",
                  padding: "14px 20px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  clipPath: "none"
                }}
                onMouseLeave={() => setActiveTask(activeTask)}
                onMouseOver={(e) => {
                  e.currentTarget.style.clipPath =
                    "polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.clipPath = "none";
                }}
              >
                <div style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  fontSize: "14px"
                }}>
                  {task.id}
                </div>
                <div>
                  <div style={{ fontWeight: "500", fontSize: "14px" }}>{task.title}</div>
                  <div style={{ fontSize: "12px", color: "#94a3b8" }}>{task.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION — FIXED SIZE IMAGE BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: "600px",
            height: "520px",
            backgroundColor: "#0f172a",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
            padding: "20px"
          }}
        >
          <img
            src={activeTask.img}
            alt={activeTask.title}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              borderRadius: "12px",
              transition: "all 0.4s ease-in-out"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WebsiteHero;
