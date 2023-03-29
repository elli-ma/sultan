import Button from "../button/Button";
import styles from "./Card.module.scss"

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.wrap}>
                <div>
                    <img className={styles.image} src="src/assets/image5.png" alt="" />
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
                        <li>Производитель: <b></b></li>
                        <li>Бренд: <b></b></li>
                        <li>Артикул: <b></b></li>
                        <li>Штрихкод: <b></b></li>
                    </ul>
                    <div>
                        <h4>Описание</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam interdum ut justo, vestibulum sagittis iaculis iaculis.
                            Quis mattis vulputate feugiat massa vestibulum duis. Faucibus
                            consectetur aliquet sed pellentesque consequat consectetur
                            congue mauris venenatis. Nunc elit, dignissim sed nulla
                            ullamcorper enim, malesuada.
                        </p>
                    </div>
                    <h4>Характеристики</h4>
                    <ul>
                        <li>Назначение: <b></b></li>
                        <li>Тип: <b></b></li>
                        <li>Производитель: <b></b></li>
                        <li>Артикул:<b></b></li>
                        <li>Штрихкод:<b></b></li>
                        <li>Вес: <b></b></li>
                        <li>Объем:<b></b></li>
                        <li>Кол-во в коробке:<b></b></li>

                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Card;