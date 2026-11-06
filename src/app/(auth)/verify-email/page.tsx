"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { Suspense } from "react";

const VerifyEmailContent = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="w-full max-w-sm text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800">
        <FiMail size={28} className="text-white" />
      </div>

      <h1 className="text-2xl font-bold text-white">Check your email</h1>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        We sent a verification link to
      </p>

      <p className="mt-1 font-medium text-white">
        {email || "your email address"}
      </p>

      <p className="mt-5 text-sm leading-6 text-zinc-500">
        Please check your inbox and click the verification link to activate your
        account.
      </p>

      <Link
        href="/login"
        className="mt-8 block w-full rounded-lg bg-zinc-200 py-3 text-sm font-semibold text-zinc-950 hover:bg-white"
      >
        Back to login
      </Link>
    </div>
  );
};

const VerifyEmailPage = () => {
  return (
    <Suspense fallback={<div className="text-zinc-400">Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
};

export default VerifyEmailPage;
