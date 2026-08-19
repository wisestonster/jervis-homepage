import { ProductLanding } from "@/components/page-ui"; import { products } from "@/lib/content"; import { createProductMetadata } from "@/lib/seo";
const product=products[0]; export const metadata=createProductMetadata(product); export default function Page(){return <ProductLanding product={product}/>}
