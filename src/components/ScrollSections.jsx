// ScrollSections.jsx
import { motion } from 'framer-motion';

const ScrollSections = () => (
  <div>
    <section className="section" style={{ height: '100vh', background: '#000' }}>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Creditor Academy
      </motion.h1>
    </section>
    {/* Repeat more sections with animations */}
  </div>
);

export default ScrollSections;
