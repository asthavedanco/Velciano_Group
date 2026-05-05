"use client";

import { useEffect } from "react";

export default function CursorFollower() {
  useEffect(() => {
    let cursor = document.querySelector(".cursor-follower") as HTMLDivElement;
    if (!cursor) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let isMagnetic = false;
    let magneticElement: HTMLElement | null = null;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      const lerp = 0.15;
      let targetX = mouseX;
      let targetY = mouseY;

      if (isMagnetic && magneticElement) {
        const rect = magneticElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        targetX = centerX + (mouseX - centerX) * 0.35;
        targetY = centerY + (mouseY - centerY) * 0.35;
      }

      cursorX += (targetX - cursorX) * lerp;
      cursorY += (targetY - cursorY) * lerp;

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX - 7.5}px, ${cursorY - 7.5}px, 0)`;
      }
      requestAnimationFrame(animateCursor);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, .slider-btn, .swiper-button-next, .swiper-button-prev, .category-card, .explore-circle, .circular-cta, .btn, .btn-link, .pill-vertical, .cta-pill, .magnetic-wrap, .hamburger, .hamburger-menu-minimal"
      ) as HTMLElement;

      if (target) {
        cursor.classList.add("active");
        if (
          target.classList.contains("magnetic-wrap") ||
          target.classList.contains("circular-cta") ||
          target.classList.contains("explore-circle") ||
          target.classList.contains("btn") ||
          target.classList.contains("btn-gold") ||
          target.classList.contains("hamburger") ||
          target.classList.contains("hamburger-menu-minimal")
        ) {
          isMagnetic = true;
          magneticElement = target;
        }

        if (target.classList.contains("circular-cta") || target.classList.contains("explore-circle")) {
          cursor.style.width = "80px";
          cursor.style.height = "80px";
          cursor.style.marginLeft = "-32.5px";
          cursor.style.marginTop = "-32.5px";
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, .slider-btn, .swiper-button-next, .swiper-button-prev, .category-card, .explore-circle, .circular-cta, .btn, .btn-link, .pill-vertical, .cta-pill, .magnetic-wrap, .hamburger, .hamburger-menu-minimal"
      );

      if (target) {
        cursor.classList.remove("active");
        cursor.style.width = "";
        cursor.style.height = "";
        cursor.style.marginLeft = "";
        cursor.style.marginTop = "";
        isMagnetic = false;
        magneticElement = null;
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    animateCursor();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return <div className="cursor-follower"></div>;
}
