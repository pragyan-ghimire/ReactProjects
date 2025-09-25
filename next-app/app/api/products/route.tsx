import { NextRequest, NextResponse } from "next/server";
import { ProductSchema } from "./schema";
import {prisma} from "@/prisma/client"

export async function GET(request: NextRequest){
    const product = await prisma.product.findMany();
    return NextResponse.json(product);
 
    // return NextResponse.json([
    //     {
    //         id: 1,
    //         name: 'Product 1',
    //         price: 100,
    //     },
    //     {
    //         id: 2,
    //         name: 'Product 2',
    //         price: 200,
    //     }   
    // ])
}

export async function POST(request: NextRequest){
    const body = await request.json();
    const parseProduct = ProductSchema.safeParse(body);

    if(!parseProduct.success){
        return NextResponse.json(parseProduct.error.issues, {status: 400});
    }

    const product = await prisma.product.create({
        data: {
            name: parseProduct.data.name,
            price: parseProduct.data.price,
            description: body.description || null,
        }
    })
    return NextResponse.json(product, {status: 201});
    // return NextResponse.json({id: 1, data: parseProduct.data}, {status: 201});
    // return NextResponse.json({id: 1, ...parseProduct.data}, {status: 201});

}