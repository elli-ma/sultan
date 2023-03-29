import Button from "../button/Button";
import styles from "./Card.module.scss"
import {Product} from "../../types"

function Card({ product }: { product: Product }) {
    return (
        <div className={styles.card}>
            <div className={styles.wrap}>
                <div>
                    <img className={styles.image} src={product.url} alt="" />
                </div>
                <div>
                    <span>В наличии</span>
                    <h3>BioMio BIO-SOAP Экологичное туалетное
                        мыло. Литсея и бергамот</h3>
                    <span className="size">90 г</span>
                    <div className={styles.block}>
                        <div className="prise"></div>
                        <div className="">+-1</div>
                        <Button name="В корзину" icon="" />
                    </div>

                    <div className={styles.block}>
                        <div className={styles.item}>Значек</div>
                        <div className={styles.item}>При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области</div>
                        <button className={styles.item}>"Прайс-лист"</button>
                    </div>
                    <ul>
                        <li>Производитель: <b>{product.manufacturer}</b></li>
                        <li>Бренд: <b>{product.brand}</b></li>
                        <li>Артикул: <b>{product.article}</b></li>
                        <li>Штрихкод: <b>{product.id}</b></li>
                    </ul>
                    <div>
                        <h4>Описание</h4>
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <h4>Характеристики</h4>
                    <ul>
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