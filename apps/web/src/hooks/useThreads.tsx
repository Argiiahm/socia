"use client";

import { getThreads } from "@/services/thread.service";
import { ThreadType } from "@/types/ThreadTypes";
import { useEffect, useState } from "react";

const useThreads = () => {
  const [threads, setThreads] = useState<ThreadType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getThreads();
      setThreads(response.data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch Threads');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { fetchData, threads, isLoading, error };
};

export default useThreads;
