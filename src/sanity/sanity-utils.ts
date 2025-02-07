import { createClient } from "@sanity/client";
import config from "./config/client-config";

import { groq } from "next-sanity";
import { Product } from "../../types/products";

interface ProductPageProps {
    params : Promise<{slug: string}>
}

export async function getProducts(): Promise<Product[]>{  
    return createClient(config).fetch(
            groq`*[_type == "product"]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                price,
                "image": image.asset->url,
                quantity,
                description,
            }`
    
        )
    }
    
    export async function getProduct(slug: string): Promise<Product>{
        const decodedSlug = decodeURIComponent(slug);
        console.log("Slug:", slug);
        return createClient(config).fetch(
            groq`*[_type == "product" && slug.current == $slug][0]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                price,
                "image": image.asset->url,
                quantity,
                description,
            }`,
            {slug: decodedSlug}
        )
    }

// export default async function ProductPage({params}: ProductPageProps){
//     const {slug} = await params
//     const product = await getProduct(slug)
// }