import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

interface Props{
    params: {id:number}
}

export function GET(request: NextRequest, {params}:Props) {
    if(params.id > 10)
        return NextResponse.json({error: "User not found"}, {status: 404});
    return NextResponse.json({id: 1, name:"John Doe"});
}

export async function PUT(request: NextRequest, {params}:Props){
    // validate the request body
    // if invalid, return 400
    // fetch the user with the given id
    // if doesn't exist, return 404
    // update user
    // return updated user
    const body = await request.json()
    if(!body.name)
        return NextResponse.json({error: "name is required"}, {status: 400})
    if(params.id > 10)
        return NextResponse.json({error:"User not found"}, {status: 404})
    return NextResponse.json({id:1, name: body.name})
}

export async function DELETE(request: NextRequest, {params}:Props){
    // fetch the user from db
    // if doesn't exist, return 404
    // delete user and return 200
if(params.id > 10)
        return NextResponse.json({error:"User not found"}, {status: 404})
    return NextResponse.json({})
}