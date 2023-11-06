import DbConnect from "@/services/DbConnect";
import userModel from "@/services/model/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
export async function POST(request, content) {
  try {
    const requestData = await request.json();
    await DbConnect();

    const newUser = await new userModel(requestData);
    newUser.password = await bcrypt.hash(newUser.password, salt)

    newUser.confirmPassword = await bcrypt.hash(newUser.confirmPassword, salt)

    const savedUser = await newUser.save();

    if (!savedUser) {
      return NextResponse.json({
        status: 400,
        success: false,
        error: "Failed to save user data",
      });
    }

    return NextResponse.json({
      status: 200,
      success: true,
      data: savedUser,
    });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({
      status: 500,
      success: false,
      error: "Internal Server Error",
    });
  }
}
