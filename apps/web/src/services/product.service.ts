import { apiClient } from "@/lib/axios";
import axios from "axios";

export const getProducts = async () => {
  try {
    const responnse = await apiClient.get("/api/v1/products");
    return responnse.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message || "Failed Fetch Products");
    }

    throw new Error("Something went wrong");
  }
};

export const getProductsByUsername = async (username: string) => {
  try {
    const response = await apiClient.get(
      `/api/v1/user/${encodeURIComponent(username)}/products`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(
        error.response?.data?.message || "Failed Fetch Products",
      );
    }

    throw new Error("Something went wrong");
  }
};
