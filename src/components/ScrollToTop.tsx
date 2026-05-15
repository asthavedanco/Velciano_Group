"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Attempt to override smooth scrolling momentarily if needed, 
    // or just let the browser handle standard scrollTo.
    // window.scrollTo(0, 0) is reliable when placed in a layout effect or timeout.
    
    // We use a small timeout to ensure DOM is painted before scrolling
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
