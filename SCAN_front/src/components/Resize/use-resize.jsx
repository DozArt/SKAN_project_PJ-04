import { useState, useEffect } from 'react';
import {SCREEN_SM, SCREEN_M} from './const-breakpoints';

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
  console.log(width, SCREEN_M, SCREEN_SM)
  return {
    width,
    isScreenSm: width > SCREEN_SM,
    isScreenM: width > SCREEN_M,
  };
};

export default useResize;