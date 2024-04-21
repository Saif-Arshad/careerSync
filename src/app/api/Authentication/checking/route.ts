import connectDb from "@/Database/Mongodb"
import User from "@/Models/User"
import { NextRequest, NextResponse } from "next/server"

 


export async function POST (request: NextRequest) {
    
    try {
      connectDb()
  const { email, name } = await request.json()
  const res = await User.findOne({ email: email, name: name}).select('_id');
  if(res){
    return NextResponse.json({ userExists: true });
  }
  else{
    return NextResponse.json({ userExists: false });

  }
} catch (error:any) {
            throw error.message
            
}
}
