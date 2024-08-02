import React from 'react';
import { Cloud } from './Cloud';

const CloudsOverlay: React.FC = () => {
  return (
    <div style={{ position: 'absolute', width: '100vw', height: '25vh', overflow: 'hidden', top: '0', zIndex: 1 }}>
      <Cloud top="5%" size="200px" duration={30} />
      <Cloud top="15%" size="250px" duration={40} />
      <Cloud top="10%" size="220px" duration={35} />
      <Cloud top="20%" size="280px" duration={45} />
    </div>
  );
};

export default CloudsOverlay;
