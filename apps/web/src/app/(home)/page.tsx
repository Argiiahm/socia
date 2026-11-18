"use client";

import HeaderBar from "@/components/layouts/HeaderBar";
import AttachPost from "@/components/core/AttachPost";
import ThreadsSection from "@/components/ui/threads/Threads";
import useThreads from "@/hooks/useThreads";

export default function HomePage() {
  const { threads } = useThreads();

  return (
    <main className="min-h-screen border-x border-zinc-200/50">
      <HeaderBar title="Home" />
      <AttachPost />
      <ThreadsSection threads={threads} />
    </main>
  );
}
