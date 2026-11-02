import { FiBook, FiImage, FiShoppingBag } from "react-icons/fi";

const AttachPost = () => {
  return (
    <section className="hidden lg:block border-b border-zinc-900/50 px-4 py-4">
      <form>
        <div className="min-w-0 flex-1">
          <textarea
            placeholder="What are you making today?"
            rows={2}
            className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
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

            <button className="rounded-full bg-white px-5 py-1.5 text-xs font-semibold text-zinc-950 transition hover:bg-zinc-200">
              Post
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AttachPost;
