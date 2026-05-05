"use client";

import { useEffect, useRef } from "react";

interface CounterProps {
  target: number;
  label: string;
  suffix?: string;
}

function CounterItem({ target, label, suffix = "+" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let count = 0;
            const updateCount = () => {
              const step = target / 50;
              if (count < target) {
                count = Math.ceil(count + step);
                if (ref.current) ref.current.innerText = count.toString();
                setTimeout(updateCount, 20);
              } else {
                if (ref.current) ref.current.innerText = target.toString();
              }
            };
            updateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-item">
      <h2>
        <span ref={ref}>0</span>
        {suffix}
      </h2>
      <p>{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="stats">
      <div className="stats-grid">
        <CounterItem target={20} label="Years Experience" />
        <CounterItem target={40} label="Countries Served" />
        <CounterItem target={500} label="Projects Done" />
        <CounterItem target={100} label="Quality Assured" suffix="%" />
      </div>
    </section>
  );
}
