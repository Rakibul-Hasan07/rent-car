import DbConnect from "@/services/DbConnect";
import wishlistModel from "@/services/model/wishlistModel";
const { createRouter } = require("next-connect");
const { NextResponse } = require("next/server");

const router = createRouter();
router.post(async (request, content) => {
    try {
        DbConnect();
        const requestData = await request.json();
        const wishtListData = await new wishlistModel(requestData);
        const { wishListCarId, wishListUserEmail } = wishtListData;
        const findData = await wishlistModel.findOne({ wishListCarId, wishListUserEmail })
        if (findData) {
            return NextResponse.json({
                status: 400,
                success: false,
                message: "Already Added",
            });
        }
        const savedData = await wishtListData.save();
        if (!savedData) {
            return NextResponse.json({
                status: 400,
                success: false,
                error: "Failed to update booking data",
            });
        }
        return NextResponse.json({
            status: 200,
            success: true,
            data: savedData,
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            success: false,
            message: "Server Error"
        })
    }
})

router.get(async (request, content) => {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('email')
    try {
        await DbConnect();
        const getWishListData = await wishlistModel.find({ wishListUserEmail: query });
        if (!getWishListData) {
            return NextResponse.json({
                status: 400,
                success: false,
                error: "Can't get wishlist data",
            });
        }
        return NextResponse.json({
            status: 200,
            success: true,
            data: getWishListData,
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
export async function POST(request, content) {
    return router.run(request, content);
}
