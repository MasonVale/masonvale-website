import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Force scroll to top with multiple methods
    const forceScrollToTop = () => {
      // Method 1: Immediate scroll
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Method 2: Smooth scroll
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } catch (error) {
        // Fallback to instant scroll
        window.scrollTo(0, 0);
      }
    };

    // Execute immediately
    forceScrollToTop();
    
    // Execute with RAF
    requestAnimationFrame(() => {
      forceScrollToTop();
    });
    
    // Execute with multiple timeouts to ensure it works
    const timeouts = [0, 10, 50, 100, 200, 500, 1000];
    
    timeouts.forEach(delay => {
      setTimeout(() => {
        forceScrollToTop();
      }, delay);
    });
    
    return () => {
      // Cleanup timeouts if component unmounts
      timeouts.forEach(delay => {
        clearTimeout(delay);
      });
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop; 