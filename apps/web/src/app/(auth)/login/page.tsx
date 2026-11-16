"use client";

import Link from "next/link";
import InputForm from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInput, LoginSchema } from "@socia/shared";
import { useForm } from "react-hook-form";
import { FiLock, FiMail } from "react-icons/fi";
import { Login, getMe } from "@/services/auth.service";
import { useState } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [error, setError] = useState("");
  const route = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (data: LoginInput) => {
    try {
      await Login(data);
      const currentUser = await getMe();

      setAuth(currentUser);

      switch (currentUser.role) {
        case "USER":
          route.push("/");
          break;
        default:
          route.push("/");
          break;
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed Login");
    }
  };

  return (
    <div className="w-full max-w-sm">
      {error && <p className="text-red-400 text-sm mb-1">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputForm
          error={errors.email}
          {...register("email")}
          icon={FiMail}
          label="Email address"
          name="email"
          type="email"
          placeholder="name@example.com"
        />

        <InputForm
          error={errors.password}
          {...register("password")}
          icon={FiLock}
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 cursor-pointer py-3 text-sm font-medium text-white"
        >
          {isSubmitting ? "Please wait.." : "Sign in"}
        </button>
      </form>

      <div className="my-7 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-800" />
        <span className="text-xs text-zinc-600">OR CONTINUE WITH</span>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <p className="mt-8 text-center text-sm text-zinc-500">
        Dont have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-zinc-800 hover:underline"
        >
          Create account
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
