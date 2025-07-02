"use client";
import React, { useEffect, useRef, useState } from 'react';

const AnimatedElement = ({ 
  children, 
  delay = 0, 
  duration = 800, 
  direction = 'up',
  className = '',
  style = {},
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return isVisible ? 'translateY(0)' : 'translateY(50px)';
      case 'down':
        return isVisible ? 'translateY(0)' : 'translateY(-50px)';
      case 'left':
        return isVisible ? 'translateX(0)' : 'translateX(50px)';
      case 'right':
        return isVisible ? 'translateX(0)' : 'translateX(-50px)';
      default:
        return isVisible ? 'translateY(0)' : 'translateY(50px)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        willChange: 'opacity, transform'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedElement; 