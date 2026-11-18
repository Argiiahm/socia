import ThreadsCreator from "@/components/ui/creator/ThreadsCreator";
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
      <ThreadsCreator />
    </main>
  );
};

export default ProfileCreator;
