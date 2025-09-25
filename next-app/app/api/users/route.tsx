import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    // fetch users from database
    return NextResponse.json([
        { id: 1, name:"John Doe"},
        { id: 2, name:"Jane Doe"},
        { id: 3, name:"Jim Doe"},
    ]); 
}

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success)
        return NextResponse.json(validation.error.issues, {status:400});
    return NextResponse.json({id: 1, name: body.name});
}