import { useEffect, useRef, useState } from 'react';

export const useDeteccionEstres = (setEsEstresado) => {
  const scrollData = useRef({ count: 0, times: [] });
  const mouseData = useRef({ movements: 0, clicks: 0, times: [] });
  const keyboardData = useRef({ backspaceCount: 0, times: [] });
  
  const signalHistory = useRef([]);
  const stressTimeout = useRef(null);
  
  const THRESHOLDS = {
    SCROLL_FAST: 3,
    MOUSE_ERRATIC: 15,
    CLICKS_RAPIDOS: 5,
    BACKSPACE_EXCESIVO: 5
  };
  
  const TIME_WINDOWS = {
    SCROLL: 1000,
    MOUSE: 2000,
    CLICKS: 3000,
    BACKSPACE: 5000
  };

  const checkStressSignals = () => {
    const now = Date.now();
    
    const recentSignals = signalHistory.current.filter(
      signal => now - signal.timestamp < 10000
    );
    
    const signalTypes = new Set(recentSignals.map(s => s.type));
    
    if (signalTypes.size >= 2 && recentSignals.length >= 3) {
      setEsEstresado(true);
      signalHistory.current = [];
      return true;
    }
    
    return false;
  };

  const addSignal = (type, intensity = 1) => {
    const signal = {
      type,
      intensity,
      timestamp: Date.now()
    };
    
    signalHistory.current.push(signal);
    
    if (signalHistory.current.length > 20) {
      signalHistory.current.shift();
    }
    
    checkStressSignals();
  };

  const handleScroll = () => {
    const now = Date.now();
    const scrollTimes = scrollData.current.times;
    
    scrollTimes.push(now);
    
    const recentScrolls = scrollTimes.filter(time => now - time < TIME_WINDOWS.SCROLL);
    scrollData.current.times = recentScrolls;
    
    if (recentScrolls.length >= THRESHOLDS.SCROLL_FAST) {
      addSignal('SCROLL_RAPIDO', recentScrolls.length);
      scrollData.current.times = [];
    }
  };

  const handleMouseMove = () => {
    const now = Date.now();
    const mouseTimes = mouseData.current.times;
    
    mouseTimes.push(now);
    
    const recentMoves = mouseTimes.filter(time => now - time < TIME_WINDOWS.MOUSE);
    mouseData.current.times = recentMoves;
    
    if (recentMoves.length >= THRESHOLDS.MOUSE_ERRATIC) {
      addSignal('MOUSE_ERRATICO', recentMoves.length);
      mouseData.current.times = [];
    }
  };

  const handleClick = () => {
    const now = Date.now();
    const clicks = mouseData.current.clicks + 1;
    mouseData.current.clicks = clicks;
    
    if (stressTimeout.current) {
      clearTimeout(stressTimeout.current);
    }
    
    stressTimeout.current = setTimeout(() => {
      mouseData.current.clicks = 0;
    }, TIME_WINDOWS.CLICKS);
    
    if (clicks >= THRESHOLDS.CLICKS_RAPIDOS) {
      addSignal('CLICS_REPETIDOS', clicks);
      mouseData.current.clicks = 0;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      const now = Date.now();
      const backspaceTimes = keyboardData.current.times;
      
      backspaceTimes.push(now);
      
      const recentBackspaces = backspaceTimes.filter(time => now - time < TIME_WINDOWS.BACKSPACE);
      keyboardData.current.times = recentBackspaces;
      
      if (recentBackspaces.length >= THRESHOLDS.BACKSPACE_EXCESIVO) {
        addSignal('BACKSPACE_EXCESIVO', recentBackspaces.length);
        keyboardData.current.times = [];
      }
    }
  };

  useEffect(() => {
    let scrollTimeout;
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 100);
      }
    };

    let mouseMoveTimeout;
    const throttledMouseMove = () => {
      if (!mouseMoveTimeout) {
        mouseMoveTimeout = setTimeout(() => {
          handleMouseMove();
          mouseMoveTimeout = null;
        }, 50);
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    window.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKeyDown);
      
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (mouseMoveTimeout) clearTimeout(mouseMoveTimeout);
      if (stressTimeout.current) clearTimeout(stressTimeout.current);
    };
  }, [setEsEstresado]);

  useEffect(() => {
    const resetInterval = setInterval(() => {
      const now = Date.now();
      signalHistory.current = signalHistory.current.filter(
        signal => now - signal.timestamp < 30000
      );
    }, 5000);

    return () => clearInterval(resetInterval);
  }, []);
};
