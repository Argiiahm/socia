import { apiClient } from "@/lib/axios";
import axios from "axios";

export const getThreads = async () => {
  try {
    const response = await apiClient.get("/api/v1/threads");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message ?? "Failed Register");
    }
    throw new Error("Something went wrong");
  }
};

export const getThread = async (id: string) => {
  try {
    const response = await apiClient.get(`/api/v1/thread/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message ?? "Failed to fetch thread");
    }
    throw new Error("Something went wrong");
  }
};
