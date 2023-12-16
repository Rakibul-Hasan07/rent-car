const { default: DbConnect } = require("@/services/DbConnect");
const { default: carModel } = require("@/services/model/carModel");
const { createRouter } = require("next-connect");
const { NextResponse } = require("next/server");

const router = createRouter();
router.put(async (request, content) => {
    const { id } = content.params;
    try {
        DbConnect();
        const requestData = await request.json();
        const updateBookingData = await carModel.findByIdAndUpdate(id, requestData, { new: true })
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
