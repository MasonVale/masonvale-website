// Professional navigation utility for consistent scroll behavior

export const scrollToTop = (): void => {
  // Force scroll to top with multiple methods
  const methods = [
    // Method 1: Immediate scroll
    () => window.scrollTo(0, 0),
    // Method 2: Document element scroll
    () => document.documentElement.scrollTop = 0,
    // Method 3: Body scroll
    () => document.body.scrollTop = 0,
    // Method 4: Smooth scroll
    () => {
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    }
  ];

  // Execute all methods to ensure it works
  methods.forEach(method => {
    try {
      method();
    } catch (error) {
      // Continue to next method
    }
  });
};

export const navigateWithScroll = (
  navigate: (path: string) => void,
  path: string
): void => {
  // Force scroll to top BEFORE navigation
  scrollToTop();
  
  // Navigate to the path
  navigate(path);
  
  // Force scroll to top AFTER navigation with multiple attempts
  setTimeout(() => {
    scrollToTop();
  }, 0);
  
  setTimeout(() => {
    scrollToTop();
  }, 50);
  
  setTimeout(() => {
    scrollToTop();
  }, 100);
  
  setTimeout(() => {
    scrollToTop();
  }, 200);
};

// Force scroll immediately
export const forceScrollToTop = (): void => {
  // Immediate scroll
  scrollToTop();
  
  // RAF scroll
  requestAnimationFrame(() => {
    scrollToTop();
  });
  
  // Delayed scroll
  setTimeout(() => {
    scrollToTop();
  }, 10);
}; 