import { NextRequest, NextResponse } from "next/server";
import {updateSchema} from "../schema";
import {prisma} from "@/prisma/client";

type Props = {
    params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, context: Props) {
    const params = await context.params;
    const user = await prisma.user.findUnique({
        where: {id: params.id}
    });
    if(!user)
        return NextResponse.json({error: "User not found"}, {status: 404});
    return NextResponse.json(user);
}

export async function PUT(request: NextRequest, context: Props){
    const params = await context.params;
    const body = await request.json()
    const validation = updateSchema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.issues, {status: 400})

    const user = await prisma.user.findUnique({
        where: {id: params.id}
    })
    if(!user)
        return NextResponse.json({error: "User not found"}, {status: 404})

    const updatedUser = await prisma.user.update({
        where: {id: user.id},
        data: {
            ...validation.data
        }
    })
    return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, context: Props){
    const params = await context.params;
    const user = await prisma.user.findUnique({
        where: {id: params.id}
    })
    if(!user)
        return NextResponse.json({error: "User not found"}, {status: 404})

    await prisma.user.delete({
        where: {id: user.id}
    })
    return NextResponse.json({message: "User deleted successfully"});
}