import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TopScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout to ensure scrolling works correctly
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

  }, [pathname]);

  return null; // This component does not render anything
}

export default TopScroll;
