import { useEffect, useRef } from 'react';

export const useDeteccionEstres = (setEsEstresado) => {
  const scrollCount = useRef(0);
  const mouseMovements = useRef(0);
  const backspaceCount = useRef(0);
  const lastScrollTime = useRef(0);
  const lastMouseTime = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;
      
      if (timeSinceLastScroll < 200) {
        scrollCount.current += 1;
      } else {
        scrollCount.current = 1;
      }
      
      lastScrollTime.current = now;

      if (scrollCount.current > 3) {
        setEsEstresado(true);
        scrollCount.current = 0;
      }
    };

    const handleMouseMove = (e) => {
      const now = Date.now();
      const timeSinceLastMouse = now - lastMouseTime.current;
      
      if (timeSinceLastMouse < 100) {
        mouseMovements.current += 1;
      } else {
        mouseMovements.current = 0;
      }
      
      lastMouseTime.current = now;

      if (mouseMovements.current > 10) {
        setEsEstresado(true);
        mouseMovements.current = 0;
      }
    };

    const handleClick = () => {
      const now = Date.now();
      const timeSinceLastClick = now - lastMouseTime.current;
      
      if (timeSinceLastClick < 500) {
        setEsEstresado(true);
      }
      
      lastMouseTime.current = now;
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Backspace') {
        backspaceCount.current += 1;
        
        if (backspaceCount.current > 5) {
          setEsEstresado(true);
          backspaceCount.current = 0;
        }
      } else {
        backspaceCount.current = 0;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKeyDown);

    timeoutRef.current = setInterval(() => {
      scrollCount.current = Math.max(0, scrollCount.current - 1);
      mouseMovements.current = Math.max(0, mouseMovements.current - 1);
      backspaceCount.current = Math.max(0, backspaceCount.current - 1);
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [setEsEstresado]);
};

