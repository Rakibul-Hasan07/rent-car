import DbConnect from "@/services/DbConnect";
import userModel from "@/services/model/userModel";
import comparePassword from "@/utils/comparePassword";
import generateToken from "@/utils/generateToken";
import { NextResponse } from "next/server";

export const POST = async (request, content) => {
    try {
        await DbConnect();
        const requestData = await request.json();
        const { email, password } = requestData;

        if (!email || !password) {
            return NextResponse.json({
                status: "Failed",
                message: "Please provide email and password"
            });
        }

        const findUser = await userModel.findOne({ email });

        if (!findUser) {
            return NextResponse.json({
                status: "Failed",
                message: "User not found. Please create an account first"
            });
        }

        const isValidPassword = await comparePassword(password, findUser.password);

        if (!isValidPassword) {
            return NextResponse.json({
                status: "Failed",
                message: "Password not correct"
            });
        }

        const token = await generateToken(findUser)
        // Return a success response with the user data
        return NextResponse.json({
            status: "Success",
            message: "Login successfully",
            data: { token, findUser }
        });
    } catch (error) {
        // Handle errors and return an error response
        return NextResponse.json({
            status: "Failed",
            message: "Can't log in, something went wrong",
            error: error.message
        });
    }
}
