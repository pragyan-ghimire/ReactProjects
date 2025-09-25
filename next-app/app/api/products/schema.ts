import {z} from 'zod';

export const ProductSchema = z.object(
    {
        name: z.string().min(3, 'Name should be at least 3 characters long'),
        price: z.number().min(0, 'Price should be a positive number'),
        descritption: z.string().optional(),
    }
)