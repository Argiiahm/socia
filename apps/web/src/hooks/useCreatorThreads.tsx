"use client";

import { getThreadsByUsername } from "@/services/thread.service";
import { ThreadType } from "@/types/ThreadTypes";
import { useEffect, useState } from "react";

const useCreatorThreads = (username: string) => {
  const [threads, setThreads] = useState<ThreadType[]>([]);

  const fetchData = async () => {
    const response = await getThreadsByUsername(username);
    setThreads(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  return { fetchData, threads };
};

export default useCreatorThreads;
