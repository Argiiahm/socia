import { RegisterInput } from "@/schemas/auth.schema";
import axios from "axios";

export const Register = async (data: RegisterInput) => {
  try {
    const response = await axios.post<RegisterInput>(
      "/api/auth/register",
      data,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message ?? "Failed Register");
    }
    throw new Error("Something went wrong");
  }
};
