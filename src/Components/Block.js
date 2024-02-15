import React, { useState } from 'react';
import './Block.css';

const Block = ({ title, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{title}</h3>
      {isHovered && <p>{content}</p>}
    </div>
  );
};

export default Block;
