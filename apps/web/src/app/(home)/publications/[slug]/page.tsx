import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiBookmark,
  FiHeart,
  FiMessageCircle,
  FiShare2,
} from "react-icons/fi";

const PublicationDetailPage = () => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl px-4 py-5">
      <Link
        href="/publications"
        className="inline-flex items-center gap-2 text-xs text-zinc-500"
      >
        <FiArrowLeft size={14} />
        Back to publications
      </Link>

      <article className="mt-8">
        <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
          The Journey: Everything Starts Somewhere
        </h1>

        <p className="mt-3 text-sm text-zinc-400">
          Every journey has a beginning. Sometimes it starts with a simple idea,
          a small step, or a decision to try something new.
        </p>

        <div className="mt-6 flex items-center justify-between border-y border-zinc-200/50 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-500">
              A
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-500">Argiiahm</p>
              <p className="mt-1 text-[10px] text-zinc-500">
                November 03, 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-500">
            <button className="transition-colors hover:text-zinc-900">
              <FiBookmark size={16} />
            </button>
            <button className="transition-colors hover:text-zinc-900">
              <FiShare2 size={16} />
            </button>
          </div>
        </div>

        <div className="relative mt-6 aspect-[16/8] w-full overflow-hidden rounded-xl bg-zinc-900">
          <Image
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
            alt="Publication cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>

        <div className="mt-8 space-y-5 text-sm leading-[1.9] text-zinc-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, dolores.
          </p>
          <p>
            Sometimes we spend too much time thinking about where we should go,
            what we should build, and how everything should look. But
            eventually, we have to take that first step.
          </p>
          <h2 className="pt-3 text-lg font-bold tracking-tight text-zinc-900">
            It All Starts With One Step
          </h2>
          <p>
            Progress does not always come from big achievements. It can come
            from small improvements, learning something new, and being
            consistent with what we do every day.
          </p>

          <p>
            There will always be challenges along the way. What matters is how
            we respond to them and how willing we are to keep learning.
          </p>
          <h2 className="pt-3 text-lg font-bold tracking-tight text-zinc-900">
            Keep Moving Forward
          </h2>
          <p>
            Every experience has something to teach us. Enjoy the process,
            appreciate the progress, and never stop exploring new possibilities.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between border-y border-zinc-200 py-4">
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-zinc-900">
              <FiHeart size={16} />
              128
            </button>

            <button className="flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-zinc-900">
              <FiMessageCircle size={16} />
              24
            </button>
          </div>

          <button className="flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-zinc-900">
            <FiShare2 size={15} />
            Share
          </button>
        </div>
      </article>

      <section className="mt-10">
        <h3 className="text-sm font-bold text-zinc-900">
          Comments <span className="text-zinc-500">(24)</span>
        </h3>
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
              <button className="rounded-lg bg-white px-4 py-2 text-[11px] font-semibold text-zinc-200/50 transition-colors hover:bg-zinc-200">
                Comment
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[10px] font-semibold text-zinc-900">
            S
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-zinc-500">
                Senopati
              </span>
              <span className="text-[10px] text-zinc-600">2 hours ago</span>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              Really love this perspective. Sometimes starting is the hardest
              part.
            </p>

            <button className="mt-2 text-[10px] text-zinc-500 transition-colors hover:text-zinc-900">
              Reply
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PublicationDetailPage;
