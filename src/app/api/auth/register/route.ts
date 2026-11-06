import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { RegisterSchema } from "@/schemas/auth.schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validateData = RegisterSchema.safeParse(body);
    if (!validateData.success) {
      return NextResponse.json(
        {
          message: "Failed to register user",
          errors: validateData.error.flatten().fieldErrors,
        },
        { status: 422 },
      );
    }

    const { fullname, username, email, password } = validateData.data;

    // existData
    const [usernameResult, emailResult] = await Promise.all([
      supabase
        .from("profiles")
        .select("id")
        .eq("username", username.toLowerCase())
        .maybeSingle(),

      supabase
        .from("profiles")
        .select("id")
        .eq("email", email.toLowerCase())
        .maybeSingle(),
    ]);

    if (usernameResult.error || emailResult.error) {
      throw new Error("Failed to check existing account");
    }

    if (usernameResult.data) {
      return NextResponse.json(
        {
          message: "Username already taken",
          errors: {
            username: ["Username is already taken"],
          },
        },
        { status: 409 },
      );
    }

    if (emailResult.data) {
      return NextResponse.json(
        {
          message: "Email already registered",
          errors: {
            email: ["Email is already registered"],
          },
        },
        { status: 409 },
      );
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${new URL(request.url).origin}/callback`,
        data: {
          fullname,
          username: username.toLowerCase(),
        },
      },
    });

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: data.user?.id,
          fullname: data.user?.user_metadata.fullname,
          username: data.user?.user_metadata.username,
          email: data.user?.email,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: (error as Error).message },
      { status: 500 },
    );
  }
}
