import styles from "./ProductsCart.module.scss"
import { useLoaderData, useParams, Link } from 'react-router-dom'

import Card from "../components/card/Card";
import type { Product } from '../types'


function ProductsCart({ products }: { products: Product[] }) {
    const { productId } = useParams()
    const product = products.find(a => a.id == Number(productId))

    if (product) {
        return (
            <div className={styles.ProductsCart}>
                <div className={styles.wrap}>
                    <ul className="crumbs">
                        <Link to=""><a href="">Главная</a></Link >
                        <Link to="/sultan/catalog"><a href="">Каталог</a></Link>
                        <Link to={`/sultan/catalog/${product.id}`} className="end_crumb">{product.name}</Link>
                    </ul>
                </div>

                <Card product={product} />
            </div>

        )
    } else {
        return (<h3>No Product Found with id: {productId} </h3>)
    }
}

export default ProductsCart;