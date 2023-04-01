import Card from "../components/card/Card";

import type { Product } from '../types'

function ProductsCart({ product }: { product: Product}) {
    return (
        <Card product={product} />
    )
}

export default ProductsCart;