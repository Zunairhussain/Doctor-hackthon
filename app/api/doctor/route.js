import mongoose, { connect, connection } from "mongoose"
import { NextResponse } from "next/server"

export async function Get(){
    
await mongoose.connect(connectionSrt)
    await const data= doctor.find()
    return NextResponse.json({result:true})
}