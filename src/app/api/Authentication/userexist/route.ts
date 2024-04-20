import connectDb from "@/Database/Mongodb";
import User from "@/Models/User";
import { NextRequest,NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
      await connectDb();
      const { email } = await req.json();
      const existingUser = await User.findOne({ email }).select('_id');
      
      if (existingUser) {
        // User already exists
        return NextResponse.json({ userExists: true });
      } else {
        // User does not exist
        return NextResponse.json({ userExists: false });
      }
    } catch (error) {
      console.log(error);
      return NextResponse.error();
    }
  }







