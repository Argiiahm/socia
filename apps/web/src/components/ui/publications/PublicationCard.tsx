import { PublicationTypes } from "@/types/PublicationTypes";
import Image from "next/image";
import Link from "next/link";

const PublicationCard = ({
  publication,
}: {
  publication: PublicationTypes;
}) => {
  return (
    <Link href={`/publications/${publication.id}`}>
      <article className="group relative mt-3 h-56 w-full cursor-pointer overflow-hidden rounded-xl">
        <Image
          src={publication.image}
          alt={publication.title}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute right-0 bottom-0 left-0 p-4">
          <h4 className="mb-1 line-clamp-2 text-sm leading-snug font-bold text-white">
            {publication.title}
          </h4>
          <p className="font-content line-clamp-2 leading-relaxed text-zinc-300">
            {publication.content}
          </p>
          <p className="mb-1.5 pt-2 text-[10px] font-medium text-zinc-400">
            @{publication.user.username}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default PublicationCard;
