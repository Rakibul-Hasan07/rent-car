import DbConnect from "@/services/DbConnect";
import carModel from "@/services/model/carModel";
import { createRouter } from "next-connect";
import { NextResponse } from "next/server";

const router = createRouter();

router.get(async (request, content) => {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get('city')
    const area = searchParams.get('area')
    try {
        await DbConnect();
        const query = {
            $or: [
                { carCity: { $regex: city, $options: 'i' } },
                { area: { $regex: area, $options: 'i' } },
            ],
        };
        const getData = await carModel.find(query);
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
            message: "Car Search Server Error"
        })
    }
})



export const GET = (request, content) => {
    return router.run(request, content);
}