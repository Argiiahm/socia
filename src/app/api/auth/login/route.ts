import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { LoginSchema } from "@/schemas/auth.schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validateData = LoginSchema.safeParse(body);

    if (!validateData.success) {
      return NextResponse.json(
        {
          message: "Failed to login user",
          errors: validateData.error.flatten().fieldErrors,
        },
        { status: 422 },
      );
    }

    const { email, password } = validateData.data;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({
      message: "User logged in successfully",
      user: {
        id: data.user?.id,
        email: data.user?.email,
        fullname: data.user?.user_metadata.fullname,
        username: data.user?.user_metadata.username,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
        error: (error as Error).message,
      },
      { status: 500 },
    );
  }
}
