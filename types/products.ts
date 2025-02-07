import { PortableTextBlock } from "next-sanity";

export type Product = {
    _id: string,
    _createdAt: string,
    name: string,
    slug: string,
    price: number,
    image: string,
    quantity: number,
    description: string,
}