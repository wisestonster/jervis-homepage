import { ProductLanding } from "@/components/page-ui"; import { getProduct } from "@/lib/content"; import { createProductMetadata } from "@/lib/seo";
const product=getProduct("jervix"); export const metadata=createProductMetadata(product); export default function Page(){return <ProductLanding product={product}/>}
