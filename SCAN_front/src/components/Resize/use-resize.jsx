import { useState, useEffect } from 'react';
import {SCREEN_SM} from './const-breakpoints';

const useResize = () => {
  const [width, setWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.screen.width);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width > SCREEN_SM,
  };
};

export default useResize;