import { notFound } from "next/navigation";

const ProfileCreator = async ({ params }: { params: Promise<{ username: string }> }) => {
  const resolvedParams = await params;
  const username = decodeURIComponent(resolvedParams.username);
  if (!username.startsWith("@")) notFound();
  const cleanUsername = username.replace("@", "");

  return (
    <div>
      <div className="relative h-28 w-full overflow-hidden bg-zinc-900">
        <div className="absolute -left-5 top-2 h-36 w-36 rounded-full border-[14px] border-zinc-800" />
        <div className="absolute left-1/3 -top-8 h-32 w-32 rounded-full bg-zinc-800" />
        <div className="absolute -right-5 top-5 h-40 w-40 rounded-full border border-zinc-700">
          <div className="absolute inset-5 rounded-full border border-zinc-700">
            <div className="absolute inset-5 rounded-full border border-zinc-700" />
          </div>
        </div>
      </div>
      <div>Hello, {cleanUsername}</div>
    </div>
  )
}

export default ProfileCreator;
