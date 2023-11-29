import userModel from "@/services/model/userModel";
import { NextResponse } from "next/server";

const { createRouter } = require("next-connect");
const jose = require('jose')

const router = createRouter();



router.post(async (request, content) => {
    const secret = new TextEncoder().encode(
        process.env.NEXT_PUBLIC_SECRET_TOKEN,
    )
    try {
        const requestData = await request.json();
        const { token } = requestData;
        const { payload } = await jose.jwtVerify(token, secret)
        const userEmail = payload?.email;
        const userdata = await userModel.findOne({ email: userEmail });
        if (userdata) {
            return NextResponse.json(
                {
                    success: true,
                    status: 200,
                    message: "Get User",
                    data: userdata
                });
        } else {
            return NextResponse.json({
                success: false,
                status: 400,
                message: 'User not find',
                error: error
            })
        }

    } catch (e) { }
});

export const POST = (request, content) => {
    return router.run(request, content);
}