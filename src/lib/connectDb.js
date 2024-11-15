import mongoose, { mongo } from "mongoose";



export default async function connectDb(){

let connection;
if (connection?.connection?.readyState !=1){

    connection = await mongoose.connect(process.env.MONGODB_URI)
 console.log("Db connected sucsessfully")   
}
}