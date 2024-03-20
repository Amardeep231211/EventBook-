
import mongoose from "mongoose";

const MONGODB_URL=process.env.MONGODB_URI;

let cached =(global as any ).mongoose||{conn:null,Promise:null};
export const connectToDatabse=async()=>{
    if(cached.conn)
    return cached.conn;
  console.log("database is conncted");
if(!MONGODB_URL)throw new Error("mongoo uri is missing");
cached.promise=cached.promise|| mongoose.connect(MONGODB_URL,{
    dbName:'evently',
    bufferCommands:false,
})
cached.conn=await cached.promise;
return cached.conn;
}