import React from "react";
import { motion } from "framer-motion";
import "./Terrain.css";

interface TerrainProps {
  showFlowers: boolean;
}

const Terrain: React.FC<TerrainProps> = React.memo(({ showFlowers }) => {
  const flowers = Array.from({ length: 30 }).map((_, index) => {
    const delay = index * 0.1;
    const left = `${Math.random() * 100}%`;
    const bottom = `${Math.random() * 100}px`;
    const size = Math.random() * 10 + 10;

    return (
      <motion.div
        key={index}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        className="terrain__flower"
        style={{
          left,
          bottom,
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    );
  });

  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="terrain"
    >
      <div className="terrain__hill"></div>
      {showFlowers && <div className="terrain__flowers">{flowers}</div>}
    </motion.div>
  );
});

export default Terrain;
