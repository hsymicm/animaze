import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SCROLL_TOP() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
