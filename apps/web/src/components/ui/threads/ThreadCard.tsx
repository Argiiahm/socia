import {
  FiHeart,
  FiMessageSquare,
  FiMoreHorizontal,
  FiRepeat,
} from "react-icons/fi";
import AttachThreadProduct from "./AttachThreadProduct";
import { ThreadType } from "@/types/ThreadTypes";
import AttachThreadPublication from "./AttachThreadPublished";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

dayjs.extend(relativeTime);

const ThreadCard = ({ thread }: { thread: ThreadType }) => {
  const hasProduct =
    thread.includeContentType.includes("PRODUCT") && thread.product;
  const hasPublication =
    thread.includeContentType.includes("PUBLICATION") && thread.publication;

  return (
    <article className="p-4 border-b border-zinc-200/50">
      <div className="flex gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 text-[10px] font-bold">
          ?
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <Link
              href={`/@${thread.user.username}`}
              className="text-xs font-bold hover:underline"
            >
              {thread.user.username}
            </Link>

            <span className="truncate text-[10px] text-zinc-500">
              {dayjs(thread.createdAt).fromNow()}
            </span>

            <button
              aria-label="More options"
              className="ml-auto shrink-0 text-zinc-500"
            >
              <FiMoreHorizontal size={17} />
            </button>
          </div>

          <Link href={`/post/${thread.id}`}>
            <p className="mt-1 text-zinc-500">{thread.content}</p>
          </Link>

          {/* PRODUCT ATTACHMENT */}
          {hasProduct && <AttachThreadProduct thread={thread} />}

          {/* ARTICLE ATTACHMENT */}
          {hasPublication && <AttachThreadPublication thread={thread} />}

          {/* thread ACTIONS */}
          <div className="mt-3 flex items-center justify-between text-zinc-500">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1.5 text-[10px]">
                <FiHeart size={14} />0
              </button>

              <button className="flex items-center gap-1.5 text-[10px]">
                <FiMessageSquare size={14} />0
              </button>

              <button className="flex items-center gap-1.5 text-[10px]">
                <FiRepeat size={14} />0
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ThreadCard;
