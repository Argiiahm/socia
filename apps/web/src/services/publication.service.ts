import { apiClient } from "@/lib/axios";
import axios from "axios";

export const getPublications = async () => {
  try {
    const response = await apiClient.get("/api/v1/publications");
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

export const getPublication = async (id: string) => {
  try {
    const response = await apiClient.get(`/api/v1/publication/${id}`);
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
