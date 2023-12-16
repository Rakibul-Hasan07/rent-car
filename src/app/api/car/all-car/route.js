import DbConnect from "@/services/DbConnect";
import carModel from "@/services/model/carModel";
import { createRouter } from "next-connect";
import { NextResponse } from "next/server";

const router = createRouter();

router.get(async (request, content) => {
    try {
        await DbConnect();
        const getData = await carModel.find();
        if (!getData) {
            return NextResponse.json({
                status: 400,
                success: false,
                error: "Can't get data",
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
            message: "Server Error"
        })
    }


});


export async function GET(request, content) {
    return router.run(request, content);
}