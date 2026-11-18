"use client";

import { getThreads } from "@/services/thread.service";
import { ThreadType } from "@/types/ThreadTypes";
import { useEffect, useState } from "react";

const useThreads = () => {
  const [threads, setThreads] = useState<ThreadType[]>([]);

  const fetchData = async () => {
    const response = await getThreads();
    setThreads(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { fetchData, threads };
};

export default useThreads;
