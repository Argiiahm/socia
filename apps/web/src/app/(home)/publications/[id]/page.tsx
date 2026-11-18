"use client";

import HeaderBar from "@/components/layouts/HeaderBar";
import usePublication from "@/hooks/usePublication";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FiBookmark, FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";

const PublicationDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { publication } = usePublication(id);

  if (!publication) {
    return <div className="p-5 text-sm text-zinc-400">please wait...</div>;
  }

  const publishedAt = dayjs(publication.createdAt).format("MMM D, YYYY");

  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl">
      <HeaderBar title="Publication" backHref="/publications" />

      <article className="mt-8 px-4">
        <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
          {publication.title}
        </h1>

        <div className="mt-6 flex items-center justify-between border-y border-zinc-200/50 py-4">
          <Link
            href={`/@${publication.user.username}`}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-500">
              {publication.user.fullname.slice(0, 1).toUpperCase()}
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-500">
                {publication.user.fullname}
              </p>
              <p className="mt-1 text-[10px] text-zinc-500">{publishedAt}</p>
            </div>
          </Link>

          <div className="flex items-center gap-3 text-zinc-500">
            <button
              aria-label="Bookmark"
              className="transition-colors hover:text-zinc-900"
            >
              <FiBookmark size={16} />
            </button>
            <button
              aria-label="Share"
              className="transition-colors hover:text-zinc-900"
            >
              <FiShare2 size={16} />
            </button>
          </div>
        </div>

        <div className="relative mt-6 aspect-[16/8] w-full overflow-hidden rounded-xl bg-zinc-900">
          <Image
            src={publication.image}
            alt={publication.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>

        <div className="font-content mt-8 space-y-5 leading-[1.9] text-zinc-700">
          {publication.content
            .split("\n")
            .map(
              (paragraph, index) => paragraph && <p key={index}>{paragraph}</p>,
            )}
        </div>

        <div className="mt-8 flex items-center justify-between border-y border-zinc-200 py-4">
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-zinc-900">
              <FiHeart size={16} />0
            </button>
            <button className="flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-zinc-900">
              <FiMessageCircle size={16} />0
            </button>
          </div>

          <button className="flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-zinc-900">
            <FiShare2 size={15} />
            Share
          </button>
        </div>
      </article>

      <section className="mt-10 px-4 pb-5">
        <h3 className="text-sm font-bold text-zinc-900">Comments (0)</h3>
        <div className="mt-5 flex gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-[10px] font-semibold text-zinc-900">
            U
          </div>
          <div className="min-w-0 flex-1">
            <textarea
              placeholder="Share your thoughts..."
              rows={3}
              className="w-full resize-none rounded-xl border border-zinc-200/50 p-3 text-xs outline-none placeholder:text-zinc-600"
            />
            <div className="mt-2 flex justify-end">
              <button className="cursor-pointer rounded-lg bg-zinc-900 px-4 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-zinc-700">
                Comment
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PublicationDetailPage;
