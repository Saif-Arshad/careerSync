import connectDb from "@/Database/Mongodb";
import User from "@/Models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
    try {
        await connectDb(); 

        const { email, password } = await req.json();
        console.log(email);

        const user = await User.findOne({ email });


        const newHash = await bcrypt.hash(password, 10);

        user.password = newHash;
        await user.save();

        return NextResponse.json({ message: "Password updated successfully" });
    } catch (error:any) {
        console.error(error);
        throw new Error("Internal Server Error");
    }
}
