import { apiClient, setAccessToken } from "@/lib/axios";
import { LoginInput, RegisterInput } from "@socia/shared";
import axios from "axios";

export const Register = async (data: RegisterInput) => {
  try {
    const response = await apiClient.post<RegisterInput>(
      "/api/v1/auth/register",
      data,
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message ?? "Failed Register");
    }
    throw new Error("Something went wrong");
  }
};

export const Login = async (data: LoginInput) => {
  try {
    const response = await apiClient.post<LoginInput>(
      "/api/v1/auth/login",
      data,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message || "Failed Login");
    }
    throw new Error("Something went wrong");
  }
};

export const RefreshToken = async () => {
  try {
    const response = await apiClient.post("/api/v1/auth/refresh");
    const token = response.data.data.accessToken;

    if (!token) throw new Error("Invalid AccessToken");
    setAccessToken(token);
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message || "Failed Refresh");
    }
    throw new Error("Something went wrong");
  }
};

export const getMe = async () => {
  try {
    const response = await apiClient.get("/api/v1/auth/me");
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message);
    }
    throw new Error("Something went wrong");
  }
};

export const Logout = async () => {
  try {
    const response = await apiClient.post("/api/v1/auth/logout");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message ?? "Failed Logout");
    }
    throw new Error("Something went wrong");
  }
};
