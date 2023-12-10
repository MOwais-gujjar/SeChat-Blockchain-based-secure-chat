import { connectDB } from "@/lib/mongoDb";
import User from "@/models/Client";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";

export async function POST(res: any) {
  try {
    const { name, email, password } = await res.json();
    const hashPassword: any = await bcrypt.hash(password, 10)
    await connectDB();
    // To store the Data in DataBase
    await User.create({name, email, password: hashPassword})

    
    return NextResponse.json({ message: "User Registered " }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Error during User have Registring" },
      { status: 500 }
    );
  }
}
