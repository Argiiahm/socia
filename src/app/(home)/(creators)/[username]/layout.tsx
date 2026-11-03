import ProfileHeader from "@/components/layouts/ProfileHeader";

const CreatorProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full border-x border-zinc-900/50">
      <ProfileHeader />
      {children}
    </main>
  );
};

export default CreatorProfileLayout;
