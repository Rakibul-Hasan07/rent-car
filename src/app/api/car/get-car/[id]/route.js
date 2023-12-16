import DbConnect from "@/services/DbConnect";
import carModel from "@/services/model/carModel";
import { createRouter } from "next-connect";
import { NextResponse } from "next/server";

const router = createRouter();

router.get(async (request, content) => {
    try {
        await DbConnect();
        const getDataById = await carModel.findOne({ _id: content?.params?.id })
        if (!getDataById) {
            return NextResponse.json({
                status: 400,
                success: false,
                message: "Can't get data"
            })
        }
        return NextResponse.json({
            status: 200,
            success: true,
            data: getDataById
        })
    } catch (error) {
        return NextResponse({
            status: 400,
            success: false,
            error: error
        })
    }
})

router.delete(async (request, content) => {
    try {
        DbConnect();
        const deleteDataById = await carModel.deleteOne({ _id: content?.params?.id })
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

export const GET = (request, content) => {
    return router.run(request, content);
}

export const DELETE = (request, content) => {
    return router.run(request, content);
}