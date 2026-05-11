import React from "react";
import { Link, useParams } from "react-router";
import { blogPosts } from "./assets";
// Placeholder blog data (replace later with backend)


const BlogDetail = () => {
  const { id } = useParams();

  // Find post
  const post = blogPosts.find((p) => p.id === id) || blogPosts[0];

  return (
    <div className="max-w-4xl mx-auto mt-24 px-4">

      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/blog"
          className="text-[var(--muted2)] font-[Syne] font-bold text-sm sm:text-base"
        >
          ← Back to blog
        </Link>
      </div>

      {/* Title */}
      <h1 className="
        font-[Syne] font-black 
        text-[32px] sm:text-[40px] md:text-[52px]
        text-[var(--text)] leading-tight
      ">
        {post.title}
      </h1>

      {/* Divider */}
      <div className="my-6 w-full h-px bg-[var(--border)]"></div>

      {/* Author Section */}
      <div className="flex items-center gap-3 mb-10">
        <div className="
          w-12 h-12 rounded-full bg-[var(--lime)]
          flex items-center justify-center
          font-[Syne] font-bold text-black text-lg
        ">
          {post.avatar}
        </div>

        <div>
          <div className="text-[var(--text)] font-[Poppins] font-semibold text-sm sm:text-base">
            {post.author}
          </div>
          <div className="text-xs sm:text-sm text-[var(--muted)] font-[Poppins]">
            {post.date} · {post.readTime}
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="
        font-[Poppins] 
        text-[16px] sm:text-[18px] 
        leading-relaxed 
        text-[var(--text)] 
        space-y-6
      ">

        {/* Convert Markdown-like content */}
        {post.content.split("\n").map((line, i) => {
          if (line.startsWith("## ")) {
            return (
              <h2 key={i} className="font-[Syne] text-2xl font-bold mt-6">
                {line.replace("## ", "")}
              </h2>
            );
          }

          if (line.startsWith("- ")) {
            return (
              <li key={i} className="ml-6 list-disc">
                {line.replace("- ", "")}
              </li>
            );
          }

          if (line.startsWith("> ")) {
            return (
              <blockquote
                key={i}
                className="border-l-4 border-[var(--lime)] pl-4 py-2 italic"
              >
                {line.replace("> ", "")}
              </blockquote>
            );
          }

          return <p key={i}>{line.trim()}</p>;
        })}
      </div>
    </div>
  );
};

export default BlogDetail;