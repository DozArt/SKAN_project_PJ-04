import { useState, useEffect } from 'react';
import {SCREEN_SM, SCREEN_MD, SCREEN_XL} from './const-breakpoints';

const useResize = () => {
  // innerWidth - ширина страницы
  // window.screen.width - ширина монитора
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return {
    width,
    isScreenSm: width > SCREEN_SM,
    isScreenMd: width > SCREEN_MD,
    isScreenXl: width > SCREEN_XL,
  };
};

export default useResize;