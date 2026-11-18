import { apiClient } from "@/lib/axios";
import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await apiClient.get("/api/v1/users");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(
        error.response?.data?.message ?? "Failed to fetch users",
      );
    }
    throw new Error("Something went wrong");
  }
};

export const getUser = async (username: string) => {
  try {
    const response = await apiClient.get(
      `/api/v1/user/${encodeURIComponent(username)}`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(
        error.response?.data?.message ?? "Failed to fetch user",
      );
    }
    throw new Error("Something went wrong");
  }
};
