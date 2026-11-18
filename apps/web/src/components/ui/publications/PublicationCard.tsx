import Image from "next/image";
import Link from "next/link";

type PublicationCardData = {
  id: string;
  image: string;
  title: string;
  content: string;
  user: {
    username: string;
  };
};

const PublicationCard = ({
  publication,
}: {
  publication?: PublicationCardData;
}) => {
  const pub = publication ?? {
    id: "the-journey-everything-starts-somewhere",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    title: "The Journey: Everything Starts Somewhere",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolores.",
    user: {
      username: "Argiiahm",
    },
  };

  return (
    <Link href={`/publications/${pub.id}`}>
      <article className="group relative mt-3 h-56 w-full cursor-pointer overflow-hidden rounded-xl">
        <Image
          src={pub.image}
          alt={pub.title}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute right-0 bottom-0 left-0 p-4">
          <h4 className="mb-1 line-clamp-2 text-sm leading-snug font-bold text-white">
            {pub.title}
          </h4>
          <p className="font-content line-clamp-2 leading-relaxed text-zinc-300">
            {pub.content}
          </p>
          <p className="mb-1.5 text-[10px] font-medium text-zinc-400">
            @{pub.user.username}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default PublicationCard;
