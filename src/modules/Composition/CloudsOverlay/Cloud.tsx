import React from 'react';
import { motion } from 'framer-motion';

interface CloudProps {
  top: string;
  size: string;
  duration: number;
}

export const Cloud: React.FC<CloudProps> = ({ top, size, duration }) => {
  return (
    <motion.svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height="auto"
      viewBox="0 0 1280.000000 822.000000"
      style={{ position: 'absolute', top }}
      initial={{ x: '-250px' }}
      animate={{ x: '100vw' }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
    >
      <g transform="translate(0.000000,822.000000) scale(0.100000,-0.100000)" fill="#dae5f7" stroke="none">
        <path d="M7121 8205 c-484 -56 -926 -221 -1315 -494 -238 -166 -476 -397 -637 -618 -23 -32 -44 -60 -45 -62 -2 -2 -40 8 -84 23 -117 38 -260 73 -385 92 -150 23 -442 23 -590 0 -611 -94 -1127 -423 -1468 -934 -235 -353 -362 -809 -344 -1229 l6 -132 -32 -5 c-18 -3 -72 -10 -122 -16 -413 -50 -861 -242 -1201 -515 -434 -349 -738 -846 -852 -1395 -38 -183 -47 -272 -46 -495 0 -243 14 -368 63 -571 221 -899 936 -1599 1835 -1794 268 -58 -2 -55 4336 -55 3806 0 4011 1 4125 18 649 97 1197 373 1635 824 142 145 217 237 324 396 233 346 381 728 448 1162 18 116 22 183 22 395 0 282 -16 420 -74 657 -180 738 -643 1363 -1298 1752 -333 198 -715 326 -1104 371 -117 14 -118 14 -118 89 0 95 -59 403 -107 556 -75 243 -205 524 -331 715 -452 687 -1140 1129 -1947 1250 -185 28 -520 35 -694 15z"/>
      </g>
    </motion.svg>
  );
};
