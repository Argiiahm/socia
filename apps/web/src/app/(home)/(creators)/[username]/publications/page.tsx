"use client";

import useCreatorPublications from "@/hooks/useCreatorPublications";
import PublicationCard from "@/components/ui/publications/PublicationCard";
import { useParams } from "next/navigation";

const CreatorPublications = () => {
  const { username: routeUsername } = useParams<{ username: string }>();
  const username = decodeURIComponent(routeUsername).replace(/^@+/, "");
  const { publications } = useCreatorPublications(username);

  return (
    <main>
      <section className="p-4">
        {publications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </section>
    </main>
  );
};

export default CreatorPublications;
