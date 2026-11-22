"use client";

import { getThreadsByUsername } from "@/services/thread.service";
import { ThreadType } from "@/types/ThreadTypes";
import { useEffect, useState } from "react";

const useCreatorThreads = (username: string) => {
  const [threads, setThreads] = useState<ThreadType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getThreadsByUsername(username);
      setThreads(response.data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch')
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  return { fetchData, threads, isLoading, error };
};

export default useCreatorThreads;
