import DbConnect from "@/services/DbConnect";
import bookingModel from "@/services/model/bookingModel";
import { NextResponse } from "next/server";

const { createRouter } = require("next-connect");

const router = createRouter();

router.post(async (request, content) => {
    try {
        DbConnect();
        const requestData = await request.json();
        const bookingData = await new bookingModel(requestData)
        const savedBookingData = await bookingData.save();
        if (!savedBookingData) {
            return NextResponse.json({
                status: 400,
                success: false,
                error: "Failed to save booking data",
            });
        }
        return NextResponse.json({
            status: 200,
            success: true,
            data: savedBookingData,
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            success: false,
            message: "Server Error"
        })
    }
})

export async function POST(request, content) {
    return router.run(request, content);
}
