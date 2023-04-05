import styles from "./ProductsCart.module.scss"
import { useLoaderData, useParams, Link } from 'react-router-dom'
import Button from "../components/button/Button";

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
                        <Link to={`/sultan/products/${product.id}`} className="end_crumb">{product.name}</Link>
                    </ul>
                    <div className={styles.back}>
                        <Button icon="icon-arrow-left" size="button_circle_small" />
                        <span className={styles.back_text}>Назад</span>
                    </div>
                    <Card product={product} />
                </div>


            </div>

        )
    } else {
        return (<h3>No Product Found with id: {productId} </h3>)
    }
}

export default ProductsCart;