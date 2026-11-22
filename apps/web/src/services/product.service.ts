import { apiClient } from "@/lib/axios";
import {
  ProductResponse,
  ProductTypes,
} from "@/types/ProductTypes";
import axios from "axios";

export const getProducts = async (): Promise<ProductResponse<ProductTypes[]>> => {
  try {
    const response = await apiClient.get<ProductResponse<ProductTypes[]>>(
      "/api/v1/products",
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message || "Failed Fetch Products");
    }

    throw new Error("Something went wrong");
  }
};

export const getProduct = async (
  id: string,
): Promise<ProductResponse<ProductTypes | null>> => {
  try {
    const response = await apiClient.get<ProductResponse<ProductTypes | null>>(
      `/api/v1/product/${id}`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message);
    }
    throw new Error("Something went wrong");
  }
};

export const getProductsByUsername = async (
  username: string,
): Promise<ProductResponse<ProductTypes[]>> => {
  try {
    const response = await apiClient.get<ProductResponse<ProductTypes[]>>(
      `/api/v1/user/${encodeURIComponent(username)}/products`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message || "Failed Fetch Products");
    }

    throw new Error("Something went wrong");
  }
};
