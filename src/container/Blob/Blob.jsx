import React, { useState, useEffect, useRef } from 'react';
import './Blob.scss';

const Blob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const animationIdRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTargetPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + (targetPosition.x - prevPosition.x) * 0.05,
        y: prevPosition.y + (targetPosition.y - prevPosition.y) * 0.05,
      }));
      animationIdRef.current = requestAnimationFrame(updatePosition);
    };

    animationIdRef.current = requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(animationIdRef.current);
  }, [targetPosition]);

  return (
    <div className="app__blob">
      <div id="blob" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
      <div id="blur"></div>
    </div>
  );
};

export default Blob;
