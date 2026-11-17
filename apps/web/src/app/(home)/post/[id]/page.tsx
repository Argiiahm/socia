"use client";

import AttachThreadProduct from "@/components/ui/threads/AttachThreadProduct";
import AttachThreadPublication from "@/components/ui/threads/AttachThreadPublished";
import HeaderBar from "@/components/layouts/HeaderBar";
import { getThread } from "@/services/thread.service";
import { useAuthStore } from "@/stores/auth.store";
import { ThreadType } from "@/types/ThreadTypes";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FiHeart,
  FiMessageCircle,
  FiMoreHorizontal,
  FiRepeat,
  FiSend,
} from "react-icons/fi";

dayjs.extend(relativeTime);

const DetailThread = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated, user } = useAuthStore();
  const [thread, setThread] = useState<ThreadType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const response = await getThread(id);
        setThread(response.data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Thread tidak dapat dimuat.",
        );
      }
    };

    fetchThread();
  }, [id]);

  if (error) {
    return <div className="p-5 text-sm text-zinc-500">{error}</div>;
  }

  if (!thread) {
    return <div className="p-5 text-sm text-zinc-400">please wait...</div>;
  }

  const hasProduct =
    thread.includeContentType.includes("PRODUCT") && thread.product;
  const hasPublication =
    thread.includeContentType.includes("PUBLICATION") && thread.publication;

  return (
    <main className="min-h-screen border-x border-zinc-200/50">
      <HeaderBar title="Thread" backHref="/" />

      <article className="border-b border-zinc-200/50 px-5 py-5 sm:px-6">
        <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-500">
            {thread.user.username.slice(0, 1).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">@{thread.user.username}</span>
              <button
                aria-label="More options"
                className="ml-auto text-zinc-500 transition hover:text-zinc-900"
              >
                <FiMoreHorizontal size={18} />
              </button>
            </div>
            <p className="mt-3 whitespace-pre-wrap text-[15px] leading-relaxed text-zinc-800">
              {thread.content}
            </p>

            {hasProduct && <AttachThreadProduct thread={thread} />}
            {hasPublication && <AttachThreadPublication thread={thread} />}

            <p className="mt-4 text-xs text-zinc-400">
              {dayjs(thread.createdAt).format("h:mm A · MMM D, YYYY")}
            </p>
            <div className="mt-4 flex items-center gap-7 border-y border-zinc-200/50 py-3 text-zinc-500">
              <button
                aria-label="Like"
                className="transition hover:text-rose-500"
              >
                <FiHeart size={18} />
              </button>
              <button
                aria-label="Reply"
                className="transition hover:text-zinc-900"
              >
                <FiMessageCircle size={18} />
              </button>
              <button
                aria-label="Repost"
                className="transition hover:text-emerald-600"
              >
                <FiRepeat size={18} />
              </button>
            </div>
          </div>
        </div>

        <section aria-label="Replies" className="py-4">
          <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3">
            <div />
            <h2 className="text-sm font-semibold">Replies</h2>
          </div>
          {isAuthenticated ? (
            <form className="mt-4 grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-3 border-b border-zinc-200/50 pb-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-500">
                {user?.username.slice(0, 1).toUpperCase()}
              </div>

              <div className="flex w-full items-end gap-3">
                <textarea
                  rows={2}
                  placeholder="Reply to this thread..."
                  className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-zinc-400"
                />

                <button
                  type="button"
                  className="mb-1 inline-flex shrink-0 items-center justify-center rounded-full bg-zinc-900 p-2.5 text-white transition hover:bg-zinc-700"
                >
                  <FiSend size={13} />
                </button>
              </div>
            </form>
          ) : (
            <Link
              href="/login"
              className="ml-[3.25rem] my-4 flex justify-center rounded-full border border-zinc-200 p-4"
            >
              <p className="text-zinc-900 cursor-pointer">
                Sign in for reply this thread.
              </p>
            </Link>
          )}

          <article className="mt-5 grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-700">
              A
            </div>
            <div className="min-w-0 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold">@andika</span>
                <span className="text-[10px] text-zinc-400">2m</span>
                <button
                  aria-label="More reply options"
                  className="ml-auto text-zinc-400 transition hover:text-zinc-900"
                >
                  <FiMoreHorizontal size={16} />
                </button>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-700">
                Keren, makasih sudah berbagi. Ini ngebantu banget!
              </p>
              <div className="mt-3 flex items-center gap-5 text-zinc-400">
                <button aria-label="Like reply" className="transition hover:text-rose-500">
                  <FiHeart size={14} />
                </button>
                <button aria-label="Reply to reply" className="transition hover:text-zinc-900">
                  <FiMessageCircle size={14} />
                </button>
              </div>
            </div>
          </article>
        </section>
      </article>
    </main>
  );
};

export default DetailThread;
