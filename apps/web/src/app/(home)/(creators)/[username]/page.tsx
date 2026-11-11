import PostsSection from "@/components/ui/posts/Posts";
import { notFound } from "next/navigation";

const ProfileCreator = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const resolvedParams = await params;
  const username = decodeURIComponent(resolvedParams.username);
  if (!username.startsWith("@")) notFound();

  return (
    <main className="min-h-screen">
      <PostsSection />
    </main>
  );
};

export default ProfileCreator;
