"use client";

import HeaderBar from "@/components/layouts/HeaderBar";
import PublicationCard from "@/components/ui/publications/PublicationCard";
import usePublications from "@/hooks/usePublications";

const PublicationPages = () => {
  const { publications } = usePublications();

  return (
    <main className="min-h-screen border-x border-zinc-200/50">
      <HeaderBar title="Publications" />
      <section className="p-4">
        {publications
          ? publications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))
          : "No Publications"}
      </section>
    </main>
  );
};

export default PublicationPages;
