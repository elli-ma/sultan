import { useAppSelector, useAppDispatch } from '../../hooks';
import { addProduct, removeProduct } from '../../features/cart/cartSlice';
import Button from "../button/Button";
import styles from "./Card.module.scss"
import { Product } from "../../types"
import { useState } from "react";

function Card({ product }: { product: Product }) {
    const cart = useAppSelector(state => state.cart.value)
    const dispatch = useAppDispatch();
    let [showDesc, setDesc] = useState(false)
    let [showChar, setChar] = useState(false)

    const productIndex = cart.findIndex(p => p.product.id == product.id)
    const amount = productIndex == -1 ? 0 : cart[productIndex].amount

    return (
        <div className={styles.card}>
            <div className={styles.wrap}>
                <div className={styles.image}>
                    <img className={styles.product_img} src={product.url} alt="" />
                </div>
                <div className={styles.info}>
                    <span>В наличии</span>
                    <p className={styles.type}><b>{product.type}</b>&nbsp;{product.name}</p>
                    <span className={styles.size}>{product.weight}</span>
                    <div className={styles.block}>
                        <h3 className={styles.prise}>{product.price}</h3>
                        <div className={styles.add}>
                            <button onClick={() => dispatch(removeProduct(product))} className={styles.minus}>-</button>
                            <span>{amount}</span>
                            <button onClick={() => dispatch(addProduct(product))} className={styles.plus}>+</button>
                        </div>
                        <Button onClick={() => dispatch(addProduct(product))} name="В корзину" icon="icon-cart" size="button_big" />
                        <button className={styles.button_white}><i className="icon-11"></i></button>
                        <button className={styles.button_whitebig}>При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области</button>
                        <button className={styles.button_whitebig}>"Прайс-лист"<i className="icon-download"></i></button>
                    </div>
                    <ul>
                        <li>Производитель: <b>{product.manufacturer}</b></li>
                        <li>Бренд: <b>{product.brand}</b></li>
                        <li>Артикул: <b>{product.article}</b></li>
                        <li>Штрихкод: <b>{product.id}</b></li>
                    </ul>

                    <div>
                        <div className={styles.description_title} onClick={() => setDesc(!showDesc)}>
                            <h4>Описание</h4>
                            <i className={showDesc ? "icon-up" : "icon-down"}></i>
                        </div>

                        <p className={styles.description} style={{ display: showDesc ? 'block' : 'none' }}>
                            {product.description}
                        </p>
                    </div>

                    <div className={styles.characteristics_title} onClick={() => setChar(!showChar)} >
                        <h4>Характеристики</h4>
                        <i className={showChar ? "icon-up" : "icon-down"}></i>
                    </div>

                    <ul className={styles.characteristics} style={{ display: showChar ? 'block' : 'none' }}>
                        <li>Назначение: <b>{product.name}</b></li>
                        <li>Тип: <b>{product.type}</b></li>
                        <li>Производитель: <b>{product.manufacturer}</b></li>
                        <li>Артикул:<b>{product.article}</b></li>
                        <li>Штрихкод:<b>{product.id}</b></li>
                        <li>Вес: <b>{product.weight}</b></li>
                        <li>Объем:<b>{product.volume}</b></li>
                        <li>Кол-во в коробке:<b>{product.amount}</b></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card;