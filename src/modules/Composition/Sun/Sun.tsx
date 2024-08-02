import React from 'react';
import { motion } from 'framer-motion';
import './Sun.css';

const Sun: React.FC = () => {
  return (
    <motion.div 
      className="sun"
      initial={{ x: '100vw', y: '-100vh', scale: 0 }}
      animate={{ x: 0, y: 0, scale: 1 }}
      transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
    >
      <motion.div 
        className="sun__glow"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}

export default Sun;
