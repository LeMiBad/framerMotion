import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { InputHTMLAttributes } from 'react';
import './Input.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<Props & MotionProps> = ({ value, onChange, placeholder, inputRef, ...rest }) => {
  return (
    <motion.input
      type="text"
      ref={inputRef}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
      whileFocus={{ 
        scale: 1.05, 
        borderColor: "var(--placeholder-color)", 
        boxShadow: "0 0 15px rgba(255, 166, 38, 0.5)" 
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      {...rest}
    />
  );
}

export default Input;
