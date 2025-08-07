// src/components/Loader.jsx
import React from 'react';
import Logo from '../assets/logo_roadmap.webp';

const loaderWrapper = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#f8f9fa',
};

const logoStyle = {
  width: '120px',
  marginBottom: '20px',
};

const lineStyle = {
  width: '120px',
  height: '4px',
  background: '#0056b3',
  borderRadius: '2px',
  animation: 'loading 1.5s infinite linear',
};

const keyframes = `
@keyframes loading {
  0% { transform: scaleX(0); transform-origin: left; }
  50% { transform: scaleX(1); transform-origin: left; }
  51% { transform: scaleX(1); transform-origin: right; }
  100% { transform: scaleX(0); transform-origin: right; }
}
`;

function Loader() {
  return (
    <div style={loaderWrapper}>
      <style>{keyframes}</style>
      <img src={Logo} alt="Logo" style={logoStyle} />
      <div style={lineStyle}></div>
    </div>
  );
}

export default Loader;
