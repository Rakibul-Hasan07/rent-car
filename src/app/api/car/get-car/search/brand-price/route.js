import DbConnect from "@/services/DbConnect";
import carModel from "@/services/model/carModel";
import { createEdgeRouter } from "next-connect";
import { NextResponse } from "next/server";

const router = createEdgeRouter()

router.get(async (request, content) => {
    const { searchParams } = new URL(request.url)
    const brand = searchParams.get('brand')
    const price = searchParams.get('price')

    console.log(brand, price)
    try {
        DbConnect();
        const query = {
            $or: [
                { brandName: { $regex: brand, $options: 'i' } },
            ],
        };
        let getData = await carModel.find(query);

        if (price === 'High To Low') {
            getData = [...getData].sort((a, b) => b.rentPricePerDay - a.rentPricePerDay);
        }

        if (price === 'Low To High') {
            getData = [...getData].sort((a, b) => a.rentPricePerDay - b.rentPricePerDay);
        }

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