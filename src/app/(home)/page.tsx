import HeaderBar from "@/components/layouts/HeaderBar";
import AttachPost from "@/core/AttachPost";
import PostsSection from "@/core/Posts";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full max-w-2xl mx-auto border-x border-zinc-900/50">
      <HeaderBar title="Home" />
      <AttachPost />
      <PostsSection />
    </main>
  );
}
