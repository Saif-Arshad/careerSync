import connectDb from "@/Database/Mongodb";
import User from "@/Models/User";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt"


export async function POST (req:NextRequest){

    const credentidal = await req.json();
    const {name,email,password} = credentidal
    const Hash = await bcrypt.hash(password,10);
    
    connectDb()
    try {
        
            const user = await User.create(
                {
                    name:name,
                    email:email,
                    password:Hash    
                }
            )
            
            await user.save()

 return NextResponse.json({message:"user Created"})       
        
    } catch (error:any) {
            console.log(error);
            throw error.message
            
    }



}