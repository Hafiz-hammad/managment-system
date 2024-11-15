import connectDb from "@/lib/connectDb";
import { UserModel } from "@/lib/Models/userModel";

export async function POST(req) {
    await connectDb();
  try{
    const obj = await req.json();
    let newUser = await new UserModel({...obj})
newUser = await newUser.save();
return Response.json({
    
    error:false,
    msg:"User Rigistered sucsessfully",
    user:newUser,
},{status:201})
  }catch(e){
    return Response.json({
        error:true,
        msg:"Something went wrong",
        user:newUser,
    },{status:400})
    
  }

}


export async function GET(req) {
    await connectDb();
    const users = await UserModel.find();
    return Response.json({
        error:false,
        msg:"User Fetched sucsessfully",
        users,
    },{status:200});

    
}



export async function PUT(req) {}



export async function DELETE(req) {}