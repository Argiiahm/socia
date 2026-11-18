import { apiClient } from "@/lib/axios";
import axios from "axios";

export const getPublicationsByUsername = async (username: string) => {
  try {
    const response = await apiClient.get(
      `/api/v1/user/${encodeURIComponent(username)}/publications`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(
        error.response?.data?.message ?? "Failed to fetch publications",
      );
    }
    throw new Error("Something went wrong");
  }
};
