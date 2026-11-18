import { ThreadType } from "@/types/ThreadTypes";
import Image from "next/image";

const AttachThreadPublication = ({ thread }: { thread: ThreadType }) => {
  const pub = thread.publication;
  if (!pub) return null;

  return (
    <div className="mt-3 overflow-hidden rounded-xl cursor-pointer group relative h-56 w-full">
      <Image src={pub.image} alt={pub.title} fill className="object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h4 className="text-sm font-bold text-white leading-snug line-clamp-2 mb-1">
          {pub.title}
        </h4>
        <p className="font-content text-zinc-300 leading-relaxed line-clamp-2">
          {pub.content}
        </p>
        <p className="text-[10px] font-medium text-zinc-400 mb-1.5">
          @{pub.user.username}
        </p>
      </div>
    </div>
  );
};

export default AttachThreadPublication;
