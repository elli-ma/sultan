import Button from "../button/Button";
import styles from "./Card.module.scss"
import { Product } from "../../types"
import { useState } from "react";

function Card({ product }: { product: Product }) {
    let [showDesc, setDesc] = useState(false)
    let [showChar, setChar] = useState(false)
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
                        <h3>{product.price}</h3>
                        <div className={styles.add}>
                            <button className={styles.minus}>-</button>
                            <span>1</span>
                            <button className={styles.plus}>+</button>
                        </div>
                        <Button name="В корзину" icon="fa-solid fa-cart-plus" size="button_big" />
                    </div>

                    <div className={styles.block2}>
                        <div className={styles.item}>
                            <i className="fa-solid fa-folder-tree"></i>
                        </div>
                        <div className={styles.item}>При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области</div>
                        <button className={styles.item}>"Прайс-лист"<i className="fa-solid fa-arrow-down"></i></button>
                    </div>
                    <ul>
                        <li>Производитель: <b>{product.manufacturer}</b></li>
                        <li>Бренд: <b>{product.brand}</b></li>
                        <li>Артикул: <b>{product.article}</b></li>
                        <li>Штрихкод: <b>{product.id}</b></li>
                    </ul>

                    <div>
                        <div className={styles.description_title} onClick = {() => setDesc(!showDesc)}>
                            <h4>Описание</h4>
                            <i className={ showDesc ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down" }></i>
                        </div>

                        <p className={styles.description} style={{display: showDesc ? 'block' : 'none'}}>
                            {product.description}
                        </p>
                    </div>

                    <div className={styles.characteristics_title} onClick = {() => setChar(!showChar)} >
                        <h4>Характеристики</h4>
                        <i className={showChar ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i>
                    </div>

                    <ul className={styles.characteristics} style={{display: showChar ? 'block' : 'none'}}>
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