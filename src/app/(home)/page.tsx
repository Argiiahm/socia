import HeaderBar from "@/components/layouts/HeaderBar";
import AttachPost from "@/components/core/AttachPost";
import PostsSection from "@/components/ui/posts/Posts";

export default function HomePage() {
  return (
    <main className="min-h-screen border-x border-zinc-900/50">
      <HeaderBar title="Home" />
      <AttachPost />
      <PostsSection />
    </main>
  );
}
