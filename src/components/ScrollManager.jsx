import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Handles /#section links from any page and resets scroll on route changes.
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      }, 0);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollManager;
