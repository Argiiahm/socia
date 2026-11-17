"use client";

import ThreadCard from "./ThreadCard";
import { useEffect, useState } from "react";
import { getThreads } from "@/services/thread.service";
import { ThreadType } from "@/types/ThreadTypes";

const ThreadsSection = () => {
  const [threads, setThreads] = useState<ThreadType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getThreads();
      setThreads(response.data);
    };
    fetchData();
  }, []);

  return (
    <section>
      {threads.map((post) => (
        <ThreadCard key={post.id} thread={post} />
      ))}
    </section>
  );
};

export default ThreadsSection;
