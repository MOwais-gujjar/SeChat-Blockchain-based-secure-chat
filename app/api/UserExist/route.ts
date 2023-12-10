import { connectDB } from "@/lib/mongoDb";
import User from "@/models/Client";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    try{
        await connectDB();
        const {email} = await req.json();
        const user = await User.findOne({email}).select("_id")
        return NextResponse.json({user})
    }catch (error){
console.log(error)
    }
} 