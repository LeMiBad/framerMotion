import React from "react";
import { motion, MotionProps } from "framer-motion";
import './Button.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  progress?: number;
  children: React.ReactNode;
  isLoading?: boolean;
  disabledStyle?: React.CSSProperties;
  progressBarColor?: string;
}

const Button: React.FC<Props & MotionProps> = ({
  progress = 100,
  children,
  isLoading = false,
  disabledStyle,
  style,
  progressBarColor = "rgba(255, 193, 7, 0.3)",
  ...rest
}) => {
  return (
    <motion.button
      whileHover={
        progress === 100 && !isLoading
          ? {
              scale: 1.1,
              boxShadow: "0px 0px 10px rgba(255, 166, 0, 0.5)",
            }
          : {}
      }
      whileTap={progress === 100 && !isLoading ? { scale: 0.95 } : {}}
      transition={{ duration: 0.3 }}
      style={{
        ...style,
        padding: "15px 20px",
        fontSize: "16px",
        borderRadius: "25px",
        border: "none",
        outline: "none",
        cursor: progress === 100 && !isLoading ? "pointer" : "not-allowed",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        backgroundColor: progress === 100 && !isLoading ? "#ffecb3" : "#ffefc1",
        color: progress === 100 && !isLoading ? "#ff5722" : "#ffab91",
        ...(progress < 100 ? disabledStyle : {}),
      }}
      disabled={progress < 100 || isLoading}
      {...rest}
    >
      <div className="button-content">
        {children}
        {isLoading && <div className="spinner-container"><div className="spinner"></div></div>}
      </div>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          backgroundColor: progressBarColor,
          zIndex: 0,
        }}
      ></motion.div>
    </motion.button>
  );
};

export default Button;
