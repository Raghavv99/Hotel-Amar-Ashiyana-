import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

function Counter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <div ref={nodeRef}>{count}{suffix}</div>;
}

export function RestaurantStats() {
  const stats = [
    { num: 50000, suffix: "+", label: "Dishes Served" },
    { num: 15000, suffix: "+", label: "Happy Guests" },
    { num: 120, suffix: "+", label: "Menu Items" },
    { num: 10, suffix: "+", label: "Years of Hospitality" }
  ];

  return (
    <section className="py-20 bg-[#030303] border-b border-ivory/5">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x divide-ivory/10">
           {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center">
                 <div className="font-serif text-3xl md:text-5xl text-luxury-gold mb-2 flex">
                    <Counter end={stat.num} suffix={stat.suffix} />
                 </div>
                 <p className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-ivory/60">{stat.label}</p>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
