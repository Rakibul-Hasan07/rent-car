import DbConnect from "@/services/DbConnect";
import bookingModel from "@/services/model/bookingModel";
import { createRouter } from "next-connect";
import { NextResponse } from "next/server";

const router = createRouter();

router.get(async (request, content) => {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('email')
    try {
        await DbConnect();
        const getUserBookingData = await bookingModel.find({ userEmail: query });
        if (!getUserBookingData) {
            return NextResponse.json({
                status: 400,
                success: false,
                error: "Can't get booking data",
            });
        }
        return NextResponse.json({
            status: 200,
            success: true,
            data: getUserBookingData,
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            success: false,
            message: "Server Error"
        })
    }


});

export async function GET(request, content) {
    return router.run(request, content);
}