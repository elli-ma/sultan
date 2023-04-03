import Button from '../button/Button'
import styles from "./Item.module.scss";
import {Product} from "../../types"

import { addProduct, removeProduct } from '../../features/cart/cartSlice';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';

function Item({ product }: { product: Product }) {

    const dispatch = useAppDispatch()
    
    return (
        <li className={styles.item}>
            <Link to={`/sultan/catalog/${product.id}`} className={styles.main}>

                <div className={styles.image}>
                    <img className ={styles.img_product} src={product.url} alt={product.description} />
                </div>

                <p className={styles.size}>{}</p>
                <p className={styles.name}> <b>{product.type}</b> {product.name}</p>
                <ul className={styles.list}>
                    <li>Штрихкод: <b>{product.id}</b></li>
                    <li>Производитель: <b>{product.manufacturer}</b></li>
                    <li>Бренд: <b>{product.brand}</b></li>
                </ul>
            </Link>
            <div className={styles.footer}>
                <h4>{product.price} {product.currency}</h4>
                <Button onClick={() => dispatch(addProduct(product))} name="В корзину" icon="icon-cart" size = "button_small" />
            </div>
        </li>
    )

}

export default Item;