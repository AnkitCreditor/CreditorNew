import React, { useState, useEffect } from "react";
import { 
  FaUserLock, FaGavel, FaMapSigns, FaFileContract, FaShieldAlt,
  FaBuilding, FaHandsHelping, FaHome, FaUsers, FaCodeBranch,
  FaCreditCard, FaChartLine, FaMoneyBillWave, FaCashRegister, FaPiggyBank,
  FaGraduationCap, FaBook, FaChalkboardTeacher, FaLightbulb, FaTools,
  FaCar, FaBed, FaShoppingCart, FaMicrophone, FaBriefcase
} from "react-icons/fa";
import BecomePrivate from '../assets/sophomore.webp';
import Junior from '../assets/junior.webp';
import Senior from '../assets/senior.webp';

const RoadmapCourses = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Define color schemes for each card with specific title colors
  const colorSchemes = [
    { 
      primary: "#2563eb", 
      secondary: "#1d4ed8", 
      icon: "#3b82f6",
      title: "#0641a7" // Blue for first course
    },
    { 
      primary: "#059669", 
      secondary: "#047857", 
      icon: "#10b981",
      title: "#047857" // Green for second course
    },
    { 
      primary: "#7c3aed", 
      secondary: "#6d28d9", 
      icon: "#8b5cf6",
      title: "#6d28d9" // Purple for third course
    }
  ];

  const courses = [
    {
      id: 1,
      name: "Become Private + New SOV 101",
      description: "Reclaim Your Legal Identity and Exit the Public System",
      image: BecomePrivate,
      modules: [
        { text: "Status correction and the principles of sovereignty", icon: <FaUserLock /> },
        { text: "Understanding legal fictions and how to rebut presumption", icon: <FaGavel /> },
        { text: "How to remove yourself from public jurisdiction", icon: <FaMapSigns /> },
        { text: "The first legal documents and private contracts you'll need", icon: <FaFileContract /> },
        { text: "How to begin protecting yourself and your estate", icon: <FaShieldAlt /> }
      ],
      outcomes: [
        { text: "Offer sovereignty or status correction consulting", icon: <FaChalkboardTeacher /> },
        { text: "Launch a private education, coaching, or legal literacy business", icon: <FaBook /> },
        { text: "Create your own trust-based services or business", icon: <FaBriefcase /> },
        { text: "Start laying the legal foundation to discharge debt and reclaim assets", icon: <FaLightbulb /> }
      ],
      duration: "Self-paced",
      level: "Foundation",
      price: "$49"
    },
    {
      id: 2,
      name: "JUNIOR: Operate Private",
      description: "Protect Your Assets & Run Your Business in the Private",
      image: Junior,
      modules: [
        { text: "Set up and operate a UBOT business trust", icon: <FaBuilding /> },
        { text: "Create lawful PMAs for private services, coaching, or healing", icon: <FaHandsHelping /> },
        { text: "Hold real estate in private trust structures", icon: <FaHome /> },
        { text: "Build intergenerational estate protection and privacy", icon: <FaUsers /> },
        { text: "Operate outside the UCC and statutory commercial codes", icon: <FaCodeBranch /> }
      ],
      outcomes: [
        { text: "Real Estate Holding and Leasing via Trusts", icon: <FaHome /> },
        { text: "Wellness or Healing PMAs", icon: <FaHandsHelping /> },
        { text: "Private Homeschools or Coaching Centers", icon: <FaGraduationCap /> },
        { text: "Skilled Trades & Artisan Guilds (under PMA)", icon: <FaTools /> },
        { text: "Trust-Based Estate & Wealth Protection Services", icon: <FaShieldAlt /> }
      ],
      duration: "Self-paced",
      level: "Intermediate",
      price: "$49"
    },
    {
      id: 3,
      name: "Private Business Credit",
      description: "Build $200K+ in Business Credit — No SSN. No PG. No Banks.",
      image: Senior,
      modules: [
        { text: "Structure UBOTs to unlock vendor and card accounts (Tier 1-4)", icon: <FaCreditCard /> },
        { text: "Dispute & fix your public credit file lawfully", icon: <FaChartLine /> },
        { text: "Improve personal credit for credit cards, personal loans & mortgages", icon: <FaMoneyBillWave /> },
        { text: "Accept payments privately with non-KYC merchant gateways", icon: <FaCashRegister /> },
        { text: "Stack funding at 0% APR to launch and scale fast", icon: <FaPiggyBank /> }
      ],
      outcomes: [
        { text: "Car Rental (Turo, HyreCar)", icon: <FaCar /> },
        { text: "Merchant Services / Payment Processing", icon: <FaCashRegister /> },
        { text: "Coaching / Consulting", icon: <FaChalkboardTeacher /> },
        { text: "E-commerce", icon: <FaShoppingCart /> },
        { text: "Podcast / Digital Studio", icon: <FaMicrophone /> },
        { text: "Credit Repair / Funding Agency", icon: <FaChartLine /> },
        { text: "Virtual Office / Notary Services", icon: <FaBriefcase /> },
        { text: "Tax Prep & Bookkeeping", icon: <FaMoneyBillWave /> }
      ],
      duration: "Self-paced",
      level: "Advanced",
      price: "$49"
    }
  ];

  // Enhanced background style
  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, #f0f4f8 0%, #e6ebf0 100%)",
    zIndex: -1,
    overflow: "hidden"
  };

  const backgroundPatternStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)",
    backgroundSize: "30px 30px",
    opacity: 0.8
  };

  // Container style with enhanced background
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    position: "relative",
    overflow: "hidden"
  };

  // Cards container style - responsive
  const cardsContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1200px",
    position: "relative",
    zIndex: 1
  };

  // Base card style - responsive
  const baseCardStyle = (index) => ({
    width: isMobile ? "100%" : "280px",
    height: isMobile ? "auto" : "420px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
    transition: "all 0.4s ease-out",
    backgroundColor: "#fff",
    position: "relative",
    marginBottom: isMobile ? "20px" : "0",
    marginLeft: !isMobile && index > 0 ? "20px" : "0",
    transform: !isMobile && hoveredCard ? 
      (hoveredCard === courses[index].id ? "scale(1.05)" : "translateX(0)") : "translateX(0)",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    border: "1px solid rgba(0,0,0,0.05)"
  });

  // Hovered card style - responsive
  const hoveredCardStyle = {
    width: isMobile ? "100%" : "800px",
    height: isMobile ? "auto" : "580px",
    boxShadow: "0 20px 50px -10px rgba(0,0,0,0.2)",
    zIndex: 10,
    marginLeft: !isMobile ? "20px" : "0"
  };

  // Image style - responsive
  const imageStyle = {
    width: "100%",
    height: isMobile ? "180px" : "160px",
    objectFit: "cover",
    transition: "all 0.4s ease",
    flexShrink: 0
  };

  // Expanded image style - responsive
  const expandedImageStyle = {
    ...imageStyle,
    width: isMobile ? "100%" : "250px",
    height: isMobile ? "200px" : "100%",
    position: isMobile ? "relative" : "absolute",
    left: isMobile ? "0" : "0",
    top: isMobile ? "0" : "0"
  };

  // Content container - compact view - responsive
  const contentStyle = {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  };

  // Expanded content container - responsive
  const expandedContentStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    height: "auto",
    marginLeft: isMobile ? "0" : "250px"
  };

  // Column style - responsive
  const columnStyle = {
    flex: 1,
    padding: isMobile ? "15px" : "20px",
    display: "flex",
    flexDirection: "column"
  };

  // Title style - responsive with dynamic color
  const titleStyle = (cardId) => ({
    fontSize: isMobile ? "20px" : "18px",
    fontWeight: "600",
    marginBottom: "10px",
    color: colorSchemes[cardId - 1].title
  });

  // Description style - responsive
  const descriptionStyle = {
    fontSize: isMobile ? "15px" : "14px",
    color: "#4a5568",
    marginBottom: "15px",
    lineHeight: "1.5"
  };

  // List style - responsive
  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    flexGrow: 1
  };

  // Item style - responsive
  const itemStyle = {
    padding: "10px 0",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    fontSize: isMobile ? "14px" : "13px",
    display: "flex",
    alignItems: "flex-start",
    gap: "10px"
  };

  // Icon style - responsive
  const iconStyle = (cardId) => ({
    color: colorSchemes[cardId - 1].icon,
    fontSize: isMobile ? "16px" : "14px",
    marginTop: "2px",
    flexShrink: 0
  });

  // Meta style - responsive
  const metaStyle = {
    display: "flex",
    flexDirection: isMobile || hoveredCard ? "column" : "row",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontSize: isMobile ? "15px" : "14px",
    gap: isMobile || hoveredCard ? "5px" : "0"
  };

  // Meta item style for hovered state - responsive
  const metaItemStyle = {
    display: "flex",
    justifyContent: "space-between"
  };

  // Button container style - responsive
  const buttonContainerStyle = {
    marginTop: "auto",
    paddingTop: "15px"
  };

  // Button style - responsive
  const buttonStyle = (cardId) => ({
    backgroundColor: colorSchemes[cardId - 1].primary,
    color: "white",
    border: "none",
    padding: isMobile ? "12px 20px" : "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: isMobile ? "16px" : "14px",
    width: "100%",
    transition: "all 0.2s ease",
    fontWeight: "500",
    ":hover": {
      backgroundColor: colorSchemes[cardId - 1].secondary,
      transform: "translateY(-1px)",
      boxShadow: `0 4px 6px -1px rgba(${parseInt(colorSchemes[cardId - 1].primary.slice(1, 3), 16)}, ${parseInt(colorSchemes[cardId - 1].primary.slice(3, 5), 16)}, ${parseInt(colorSchemes[cardId - 1].primary.slice(5, 7), 16)}, 0.2)`
    }
  });

  return (
    <div style={containerStyle}>
      {/* Enhanced background elements */}
      <div style={backgroundStyle}>
        <div style={backgroundPatternStyle}></div>
      </div>
      
      <div style={cardsContainerStyle}>
        {courses.map((course, index) => (
          <div
            key={course.id}
            style={{
              ...baseCardStyle(index),
              ...(!isMobile && hoveredCard === course.id ? hoveredCardStyle : {})
            }}
            onMouseEnter={!isMobile ? () => setHoveredCard(course.id) : null}
            onMouseLeave={!isMobile ? () => setHoveredCard(null) : null}
            onClick={isMobile ? () => setHoveredCard(hoveredCard === course.id ? null : course.id) : null}
          >
            {(!isMobile && hoveredCard === course.id) || (isMobile && hoveredCard === course.id) ? (
              <>
                <img src={course.image} alt={course.name} style={expandedImageStyle} />
                <div style={expandedContentStyle}>
                  <div style={columnStyle}>
                    <h3 style={titleStyle(course.id)}>{course.name}</h3>
                    <p style={descriptionStyle}>{course.description}</p>
                    <div style={metaStyle}>
                      <div style={metaItemStyle}>
                        <strong>Duration:</strong> <span>{course.duration}</span>
                      </div>
                      <div style={metaItemStyle}>
                        <strong>Level:</strong> <span>{course.level}</span>
                      </div>
                      <div style={metaItemStyle}>
                        <strong>Price:</strong> <span>{course.price}</span>
                      </div>
                    </div>
                  </div>
                  <div style={columnStyle}>
                    <h4 style={{...titleStyle(course.id), fontSize: isMobile ? "18px" : "16px"}}>What You'll Learn</h4>
                    <ul style={listStyle}>
                      {course.modules.map((module, i) => (
                        <li key={`module-${i}`} style={itemStyle}>
                          <span style={iconStyle(course.id)}>{module.icon}</span>
                          <span>{module.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={columnStyle}>
                    <h4 style={{...titleStyle(course.id), fontSize: isMobile ? "18px" : "16px"}}>What You Can Do</h4>
                    <ul style={listStyle}>
                      {course.outcomes.map((outcome, i) => (
                        <li key={`outcome-${i}`} style={itemStyle}>
                          <span style={iconStyle(course.id)}>{outcome.icon}</span>
                          <span>{outcome.text}</span>
                        </li>
                      ))}
                    </ul>
                    <div style={buttonContainerStyle}>
                      <button 
                        style={buttonStyle(course.id)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = colorSchemes[course.id - 1].secondary;
                          e.currentTarget.style.transform = "translateY(-1px)";
                          e.currentTarget.style.boxShadow = `0 4px 6px -1px rgba(${parseInt(colorSchemes[course.id - 1].primary.slice(1, 3), 16)}, ${parseInt(colorSchemes[course.id - 1].primary.slice(3, 5), 16)}, ${parseInt(colorSchemes[course.id - 1].primary.slice(5, 7), 16)}, 0.2)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = colorSchemes[course.id - 1].primary;
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <img src={course.image} alt={course.name} style={imageStyle} />
                <div style={contentStyle}>
                  <h3 style={titleStyle(course.id)}>{course.name}</h3>
                  <p style={descriptionStyle}>
                    {course.description.length > 100 
                      ? `${course.description.substring(0, 100)}...` 
                      : course.description}
                  </p>
                  <div style={metaStyle}>
                    <span><strong>Level:</strong> {course.level}</span>
                    <span><strong>Price:</strong> {course.price}</span>
                  </div>
                  <div style={buttonContainerStyle}>
                    <button 
                      style={buttonStyle(course.id)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colorSchemes[course.id - 1].secondary;
                        e.currentTarget.style.transform = "translateY(-1px)";
                        e.currentTarget.style.boxShadow = `0 4px 6px -1px rgba(${parseInt(colorSchemes[course.id - 1].primary.slice(1, 3), 16)}, ${parseInt(colorSchemes[course.id - 1].primary.slice(3, 5), 16)}, ${parseInt(colorSchemes[course.id - 1].primary.slice(5, 7), 16)}, 0.2)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = colorSchemes[course.id - 1].primary;
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {isMobile ? "View Details" : "Learn More"}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapCourses;