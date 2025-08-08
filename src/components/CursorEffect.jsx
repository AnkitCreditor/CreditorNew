// CursorEffect.jsx
import { useEffect } from 'react';

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'gold',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'transform 0.2s ease',
      }}
    />
  );
};

export default CursorEffect;
