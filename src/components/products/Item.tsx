import Button from '../button/Button'
import styles from "./Item.module.scss";

type Product = {
    url: string,
    name: string,
    size_type: "объем" | "вес",
    size: string,
    id: number,
    manufacturer: string,
    brand: string,
    description: string,
    price: string
}

const SIZE_TYPE = {
    "объем": "мл.",
    "вес": "г."
} as const

function Item({ product }: { product: Product }) {


    return (
        <li className={styles.item}>
            <div className={styles.main}>

                <div className={styles.image}>
                    <img src={product.url} alt={product.description} />
                </div>

                <p className={styles.size}>{product.size} {SIZE_TYPE[product.size_type]}</p>
                <p className={styles.description}> <b>{product.name}</b> {product.description}</p>
                <ul className={styles.list}>
                    <li>Штрихкод: <b>{product.id}</b></li>
                    <li>Производитель: <b>{product.manufacturer}</b></li>
                    <li>Бренд: <b>{product.brand}</b></li>
                </ul>
            </div>
            <div className={styles.footer}>
                <h4>{product.price}</h4>
                <Button name="В КОРЗИНУ" icon="fa-solid fa-cart-plus" />
            </div>
        </li>
    )

}

export default Item;