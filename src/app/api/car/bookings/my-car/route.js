import DbConnect from "@/services/DbConnect";
import bookingModel from "@/services/model/bookingModel";
import { createRouter } from "next-connect";
import { NextResponse } from "next/server";

const router = createRouter();

router.get(async (request, content) => {
    try {
        await DbConnect();
        const getBookingData = await bookingModel.find();
        if (!getBookingData) {
            return NextResponse.json({
                status: 400,
                success: false,
                error: "Can't get booking data",
            });
        }
        return NextResponse.json({
            status: 200,
            success: true,
            data: getBookingData,
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            success: false,
            message: "Server Error"
        })
    }
})

export async function GET(request, content) {
    return router.run(request, content);
}