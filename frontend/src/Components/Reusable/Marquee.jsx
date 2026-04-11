import React from "react";

const marqueeItems = [
  "React & Next.js",
  "UI/UX Design",
  "Web Animation",
  "Full-Stack Dev",
  "Performance Optimization",
  "Creative Direction",
];

const Marquee = () => {
  return (
    <div className="border-t border-b w-full overflow-hidden  border-[var(--border)] py-4  bg-[var(--bg2)]">
      <div
        className="flex w-max"
        style={{
          animation: "marquee 22s linear infinite",
        }}
      >
        {marqueeItems.concat(marqueeItems).map((item, index) => (
          <div
            key={index}
            className="whitespace-nowrap font-syne font-extrabold text-[0.75rem] tracking-widest uppercase text-[var(--muted)] flex items-center gap-10 px-10 relative"
          >
            {item}
            <span className="text-[var(--lime)] text-[0.6rem] ml-2">★</span>
          </div>
        ))}
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;