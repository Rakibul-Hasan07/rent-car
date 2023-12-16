import DbConnect from "@/services/DbConnect";
import bookingModel from "@/services/model/bookingModel";
import { NextResponse } from "next/server";

const { createRouter } = require("next-connect");

const router = createRouter();

router.put(async (request, content) => {
    const { id } = content.params;
    try {
        DbConnect();
        const requestData = await request.json();
        const updateBookingData = await bookingModel.findByIdAndUpdate(id, requestData, { new: true })
        if (!updateBookingData) {
            return NextResponse.json({
                status: 400,
                success: false,
                error: "Failed to update booking data",
            });
        }
        return NextResponse.json({
            status: 200,
            success: true,
            data: updateBookingData,
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            success: false,
            message: "Server Error"
        })
    }
})

export async function PUT(request, content) {
    return router.run(request, content);
}
