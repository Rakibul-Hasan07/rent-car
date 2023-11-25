import DbConnect from "@/services/DbConnect";
import carModel from "@/services/model/carModel";
import { createEdgeRouter } from "next-connect";
import { NextResponse } from "next/server";

const router = createEdgeRouter()

router.get(async (request, content) => {
    try {
        DbConnect();
        const getData = await carModel.find();
        if (!getData) {
            return NextResponse.json({
                status: 400,
                success: false,
                error: "Failed to find car data",
            });
        }

        return NextResponse.json({
            status: 200,
            success: true,
            data: getData,
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            success: false,
            message: "Car Server Error"
        })
    }
})



export const GET = (request, content) => {
    return router.run(request, content);
}