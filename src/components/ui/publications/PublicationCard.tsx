import Image from "next/image";
import Link from "next/link";

const PublicationCard = () => {
  return (
    <div className="mt-3 cursor-pointer overflow-hidden border border-zinc-800 bg-zinc-900/80">
      <div className="relative aspect-[16/9] object-cover w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
          alt="Publication thumbnail"
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>

      <div className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <Link
            href=""
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-700 text-[10px] font-bold"
          >
            AG
          </Link>
          <p className="text-[14px] text-zinc-500">Argiiahm</p>
        </div>
        <p className="font-medium text-sm leading-relaxed text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam, dolores...
        </p>

        <div className="mt-2 flex items-center gap-2 text-[10px] text-zinc-500">
          <span>2 Min</span>
          <span>·</span>
          <span>Argiiahm</span>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
