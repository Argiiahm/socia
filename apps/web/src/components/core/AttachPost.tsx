"use client";

import { FiBook, FiImage, FiShoppingBag } from "react-icons/fi";
import PostModal from "./modal/PostModal";
import { useState } from "react";

const AttachPost = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <section className="hidden lg:block border-b border-zinc-200/50 p-4">
      <div className="min-w-0 flex-1">
        <textarea
          onClick={() => setIsOpen(true)}
          placeholder="What are you making today?"
          rows={2}
          className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-zinc-500"
        />

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center text-sm gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-1.5 text-zinc-400 transition hover:opacity-80 cursor-pointer"
            >
              <FiImage size={14} />
              Media
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-1.5 text-zinc-400 transition hover:opacity-80 cursor-pointer"
            >
              <FiBook size={14} />
              Article
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-1.5 text-zinc-400 transition hover:opacity-80 cursor-pointer"
            >
              <FiShoppingBag size={14} />
              Attach product
            </button>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full border border-zinc-200/50 px-5 py-1.5 text-xs font-semibold text-zinc-500 cursor-pointer"
          >
            Post
          </button>
        </div>
      </div>
      <PostModal open={open} setIsOpen={setIsOpen} />
    </section>
  );
};

export default AttachPost;
