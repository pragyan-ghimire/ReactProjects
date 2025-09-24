import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    // fetch users from database
    return NextResponse.json([
        { id: 1, name:"John Doe"},
        { id: 2, name:"Jane Doe"},
        { id: 3, name:"Jim Doe"},
    ]);
}