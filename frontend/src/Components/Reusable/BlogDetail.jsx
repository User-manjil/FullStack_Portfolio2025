import React from "react";
import { Link } from "react-router";

const BlogDetail = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4">

      {/* Back Button */}
      <div className="mb-6">
        <Link 
          to="/blog"
          className="text-[var(--muted2)] font-[Syne] font-bold"
        >
          ← Back to blog
        </Link>
      </div>

      {/* Title */}
      <h1 className="font-[Syne] text-4xl md:text-5xl text-[var(--text)] font-black leading-tight">
        The Art of Meaningful Micro-interactions
      </h1>

      {/* Divider */}
      <div className="my-6 w-full h-px bg-[var(--border)]"></div>

      {/* Author Section */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-full bg-[var(--lime)] flex items-center justify-center font-[Syne] font-bold text-black">
          MA
        </div>

        <div>
          <div className="text-[var(--text)] font-[Poppins] font-semibold">
            Manjil Aryal
          </div>
          <div className="text-sm text-[var(--muted)] font-[Poppins]">
            April 28, 2026 · 4 min read
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="font-[Poppins] text-lg leading-relaxed text-[var(--text)] space-y-6">

        <p>
          Micro-interactions are the small, subtle animations or responses that
          bring life to digital interfaces. They guide the user, communicate state,
          and make an experience feel intentional and enjoyable.
        </p>

        <h2 className="font-[Syne] text-2xl font-bold">Why Micro-interactions Matter</h2>
        <p>
          Humans naturally respond to feedback. When an interface reacts to our
          tap, swipe, or click, it reassures us that the system understands our
          intention. Without micro-interactions, digital spaces feel cold and
          static.
        </p>

        <h2 className="font-[Syne] text-2xl font-bold">Types of Micro-interactions</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Button hover and press feedback</li>
          <li>Subtle loading animations</li>
          <li>Like and favorite animations</li>
          <li>Page transitions and smooth fades</li>
          <li>Input field validation feedback</li>
        </ul>

        <blockquote className="border-l-4 border-[var(--lime)] pl-4 py-2 italic">
          “The best micro-interactions are the ones users barely notice—
          they just feel that the interface is smooth.”
        </blockquote>

        <p>
          A well-designed interface doesn't need to shout. It communicates
          through movement, timing, and responsive design. When used correctly,
          micro-interactions create emotional delight and enhance usability at the
          same time.
        </p>

      </div>

    </div>
  );
};

export default BlogDetail;