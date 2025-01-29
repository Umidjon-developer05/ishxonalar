import { mongooseConnect } from "@/app/lib/mongoose";
import { NextResponse } from "next/server";
import Login from "@/app/models/LoginAll";
import bcrypt from "bcryptjs";
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    console.log("Received email:", email);

    await mongooseConnect();

    const user = await Login.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "Bunday foydalanuvchi topilmadi" },
        { status: 404 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "Noto‘g‘ri parol" }, { status: 401 });
    }

    return NextResponse.json(
      {
        message: "Foydalanuvchi tasdiqlandi",
        user,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Tekshiruvda xatolik:", error);
    return NextResponse.json(
      {
        error: "Server xatosi",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await mongooseConnect();
    const users = await Login.find({});
    return NextResponse.json(users, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch users",
      },
      { status: 500 }
    );
  }
}
