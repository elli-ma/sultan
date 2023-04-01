import Button from '../button/Button'
import styles from "./Item.module.scss";
import {Product} from "../../types"


function Item({ product }: { product: Product }) {


    return (
        <li className={styles.item}>
            <div className={styles.main}>

                <div className={styles.image}>
                    <img src={product.url} alt={product.description} />
                </div>

                <p className={styles.size}>{}</p>
                <p className={styles.name}> <b>{product.type}</b> {product.name}</p>
                <ul className={styles.list}>
                    <li>Штрихкод: <b>{product.id}</b></li>
                    <li>Производитель: <b>{product.manufacturer}</b></li>
                    <li>Бренд: <b>{product.brand}</b></li>
                </ul>
            </div>
            <div className={styles.footer}>
                <h4>{product.price}</h4>
                <Button name="В корзину" icon="fa-solid fa-cart-plus" size = "button_small" />
            </div>
        </li>
    )

}

export default Item;