import DbConnect from "@/services/DbConnect";
import carModel from "@/services/model/carModel";
import { NextResponse } from "next/server";


export const POST = (async (request, content, next) => {
    try {
        DbConnect();
        const requestData = await request.json();
        const carResult = await new carModel(requestData)
        const savedCarData = await carResult.save();
        if (!savedCarData) {
            return NextResponse.json({
                status: 400,
                success: false,
                error: "Failed to save car data",
            });
        }

        return NextResponse.json({
            status: 200,
            success: true,
            data: savedCarData,
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            success: false,
            message: "Server Error"
        })
    }
})

