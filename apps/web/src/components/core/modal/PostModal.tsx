"use client";

import { useEffect, useRef } from "react";
import { FiBook, FiImage, FiShoppingBag } from "react-icons/fi";

const PostModal = ({
  open,
  setIsOpen,
}: {
  open: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const onFocus = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      onFocus.current?.focus();
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  return (
    <>
      {open && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="w-full max-w-md rounded-lg bg-zinc-950 border border-zinc-900">
            <div className="flex items-center justify-between border-b border-zinc-900 px-4 py-2">
              <h1 className="font-medium">Create Post</h1>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white text-[14px] cursor-pointer"
              >
                Cancel
              </button>
            </div>
            <form>
              <div className="min-w-0 flex-1">
                <textarea
                  ref={onFocus}
                  placeholder="What are you making today?"
                  rows={2}
                  className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-zinc-500 p-4"
                />

                <div className="mt-3 flex flex-wrap items-center justify-between  border-t border-zinc-900 px-4 py-2">
                  <div className="flex flex-wrap items-center text-sm gap-4">
                    <button className="flex items-center gap-1.5 text-zinc-400 transition hover:text-white">
                      <FiImage size={14} />
                      Media
                    </button>

                    <button className="flex items-center gap-1.5 text-zinc-400 transition hover:text-white">
                      <FiBook size={14} />
                      Article
                    </button>

                    <button className="flex items-center gap-1.5 text-zinc-400 transition hover:text-white">
                      <FiShoppingBag size={14} />
                      Attach product
                    </button>
                  </div>

                  <button className="rounded-full border border-zinc-900 px-5 py-1.5 text-xs font-semibold text-white cursor-pointer">
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default PostModal;
