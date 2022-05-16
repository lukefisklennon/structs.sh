import zIndex from '@mui/material/styles/zIndex';
import React, { FC, useEffect, useState, useRef } from 'react';
import './FloatingWindow.css'

function FloatingWindowHandler(el) {
  const [{ dx, dy }, setOffset] = useState({ dx: 0, dy: 0 });

  useEffect(() => {
    const handleMouseDown = event => {
      const startX = event.pageX - dx;
      const startY = event.pageY - dy;
      //console.log(el.current.getElementByClassName("header"));

      const handleMouseMove = event => {
        const newDx = event.pageX - startX;
        const newDy = event.pageY - startY;
        setOffset({ dx: newDx, dy: newDy });
      };

      document.addEventListener("mousemove", handleMouseMove);

      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", handleMouseMove);
        },
        { once: true }
      );
    };

    el.current.addEventListener("mousedown", handleMouseDown);

    return () => {
      el.current.removeEventListener("mousedown", handleMouseDown);
    };
  }, [dx, dy]);

  useEffect(() => {
    el.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
  }, [dx, dy]);
}

const FloatingWindow = ({ children }) => {
  const cardRef = useRef(null);
  FloatingWindowHandler(cardRef);

  return (
    <div className="floating-window" ref={cardRef}>
      <div className="header">
        <div className='minimize'>X</div>
      </div>
      {children}
    </div >
  );
};

export default FloatingWindow;
