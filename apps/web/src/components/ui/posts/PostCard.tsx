import {
  FiBookmark,
  FiHeart,
  FiMessageSquare,
  FiMoreHorizontal,
  FiRepeat,
} from "react-icons/fi";
import AttachPostArticle from "./AttachPostArticle";
import AttachPostProduct from "./AttachPostProduct";
import Link from "next/link";
import { PostType } from "@/types/PostTypes";

const PostCard = ({ post }: { post: PostType }) => {
  return (
    <article className="p-4 transition hover:bg-zinc-900/20">
      <div className="flex gap-3">
        <Link
          href={post.username}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-700 text-[10px] font-bold"
        >
          {post.avatar}
        </Link>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <Link
              href={post.username}
              className="text-xs font-bold hover:underline"
            >
              {post.name}
            </Link>

            <span className="truncate text-[10px] text-zinc-500">
              {post.username} · {post.time}
            </span>

            <button
              aria-label="More options"
              className="ml-auto shrink-0 text-zinc-500 hover:text-white"
            >
              <FiMoreHorizontal size={17} />
            </button>
          </div>

          <p className="mt-1 text-xs leading-[1.6] text-zinc-200">
            {post.content}
          </p>

          {/* PRODUCT ATTACHMENT */}
          {post.type === "product" && post.product && (
            <AttachPostProduct post={post} />
          )}

          {/* ARTICLE ATTACHMENT */}
          {post.type === "article" && post.article && (
            <AttachPostArticle post={post} />
          )}

          {/* POST ACTIONS */}
          <div className="mt-3 flex items-center justify-between text-zinc-500">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1.5 text-[10px]">
                <FiHeart size={14} />
                {post.likes}
              </button>

              <button className="flex items-center gap-1.5 text-[10px]">
                <FiMessageSquare size={14} />
                {post.comments}
              </button>

              <button className="flex items-center gap-1.5 text-[10px]">
                <FiRepeat size={14} />
                {post.reposts}
              </button>
            </div>

            <button
              aria-label="Bookmark"
              className="transition hover:text-white"
            >
              <FiBookmark size={15} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
