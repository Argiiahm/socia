import HeaderBar from "@/components/layouts/HeaderBar";
import PublicationCard from "@/components/ui/publications/PublicationCard";

const PublicationPages = () => {
  return (
    <main className="min-h-screen border-x border-zinc-200/50">
      <HeaderBar title="Publications" />
      <section className="p-4">
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
      </section>
    </main>
  );
};

export default PublicationPages;
