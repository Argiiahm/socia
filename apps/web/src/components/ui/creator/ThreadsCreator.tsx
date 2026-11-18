"use client";

import useCreatorThreads from "@/hooks/useCreatorThreads";
import ThreadsSection from "../threads/Threads";
import { useParams } from "next/navigation";

const ThreadsCreator = () => {
  const { username: routeUsername } = useParams<{ username: string }>();
  const username = decodeURIComponent(routeUsername).replace(/^@+/, "");
  const { threads } = useCreatorThreads(username);

  return <ThreadsSection threads={threads} />;
};

export default ThreadsCreator;
