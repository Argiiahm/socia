import InputForm from "@/components/ui/input";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";
import { FiLock, FiMail } from "react-icons/fi";

const RegisterPage = () => {
  return (
    <div className="w-full max-w-sm">
      <form className="space-y-5">
        <InputForm
          icon={FiMail}
          label="Fullname"
          name="fullname"
          type="text"
          placeholder="John Doe"
        />
        <InputForm
          icon={FiMail}
          label="username"
          name="username"
          type="text"
          placeholder="johndoe"
        />
        <InputForm
          icon={FiMail}
          label="Email address"
          name="email"
          type="email"
          placeholder="name@example.com"
        />

        <InputForm
          icon={FiLock}
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-300 cursor-pointer py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
        >
          Sign in
        </button>
      </form>
      <div className="my-7 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-800" />
        <span className="text-xs text-zinc-600">OR CONTINUE WITH</span>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900"
      >
        <FaGoogle />
        Continue with Google
      </button>

      <p className="mt-8 text-center text-sm text-zinc-500">
        have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-white transition hover:text-zinc-300"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
