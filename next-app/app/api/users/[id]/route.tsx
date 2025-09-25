import { NextRequest, NextResponse } from "next/server";
import schema,{updateSchema} from "../schema";
import {prisma} from "@/prisma/client";

interface Props{
    params: {id:string}
}

export async function GET(request: NextRequest, {params}:Props) {
    const {id} = await params;
    const user = await prisma.user.findUnique({
        where: {id: parseInt(id)}
    });
    if(!user)
        return NextResponse.json({error: "User not found"}, {status: 404});
    return NextResponse.json(user);
    // fetch the user with the given id
    // if doesn't exist, return 404
    // return NextResponse.json({id: params.id, name: "John Doe"});
    
    // if(params.id > 10)
    //     return NextResponse.json({error: "User not found"}, {status: 404});
    // return NextResponse.json({id: 1, name:"John Doe"});
}

export async function PUT(request: NextRequest, {params}:Props){
    // validate the request body
    // if invalid, return 400
    // fetch the user with the given id
    // if doesn't exist, return 404
    // update user
    // return updated user
    const body = await request.json()
    const validation = updateSchema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.issues, {status: 400})

    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
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

    // if(params.id > "10")
    //     return NextResponse.json({error:"User not found"}, {status: 404})
    // return NextResponse.json({id:1, name: body.name})
}

export async function DELETE(request: NextRequest, {params}:Props){
    // fetch the user from db
    // if doesn't exist, return 404
    // delete user and return 200
    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })
    if(!user)
        return NextResponse.json({error: "User not found"}, {status: 404})

    await prisma.user.delete({
        where: {id: user.id}
    })
    return NextResponse.json({message: "User deleted successfully"});
// if(params.id > "10")
//         return NextResponse.json({error:"User not found"}, {status: 404})
//     return NextResponse.json({})
}