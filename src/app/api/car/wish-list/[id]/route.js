import DbConnect from "@/services/DbConnect";
import wishlistModel from "@/services/model/wishlistModel";
import { createRouter } from "next-connect";
import { NextResponse } from "next/server";

const router = createRouter();

router.delete(async (request, content) => {
    try {
        DbConnect();
        const deleteDataById = await wishlistModel.deleteOne({ _id: content?.params?.id })
        if (!deleteDataById) {
            return NextResponse.json({
                status: 400,
                success: false,
                message: "Can't delete"
            })
        }
        return NextResponse.json({
            status: 200,
            success: true,
            message: "Delete Successfully"
        })
    } catch (error) {
        return NextResponse({
            status: 400,
            success: false,
            error: error
        })
    }
})


export const DELETE = (request, content) => {
    return router.run(request, content);
}