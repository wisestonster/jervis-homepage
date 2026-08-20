import { ProductLanding } from "@/components/page-ui"; import { getProduct } from "@/lib/content"; import { createProductMetadata } from "@/lib/seo";
const product=getProduct("coresetdao"); export const metadata=createProductMetadata(product); export default function Page(){return <ProductLanding product={product}/>}
