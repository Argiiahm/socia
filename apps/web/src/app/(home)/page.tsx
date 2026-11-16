import HeaderBar from "@/components/layouts/HeaderBar";
import AttachPost from "@/components/core/AttachPost";
import ThreadsSection from "@/components/ui/threads/Threads";

export default function HomePage() {
  return (
    <main className="min-h-screen border-x border-zinc-200/50">
      <HeaderBar title="Home" />
      <AttachPost />
      <ThreadsSection />
    </main>
  );
}
