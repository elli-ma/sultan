import styles from "./Hero.module.scss";
import Button from "../button/Button";
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div>
            <div className={styles.hero}>
                <div className={styles.blur}></div>
                <div className={styles.wrapper}>
                    <div className={styles.block}>
                        <h1 className={styles.title}>Бытовая химия, косметика и хозтовары</h1>
                        <h3 className={styles.title_small}>оптом по кокчетаву и области</h3>
                        <Link to="/sultan/catalog" >
                            <div className={styles.block_button}><Button name="В каталог" size="button_big1" /></div>
                        </Link>
                        <div className={styles.items}>
                            <div className={styles.item}>
                                <span>+</span>
                                <span className={styles.item__text}>Только самые выгодные предложения</span>
                            </div>
                            <div className={styles.item}>
                                <span>+</span>
                                <span className={styles.item__text}> Бесплатная доставка по Кокчетаву <b>от 10 тыс ₸</b></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.items__small}>
                <div className={styles.item}>
                    <span className={styles.item__text}>+ Только самые выгодные предложения</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.item__text}>+ Бесплатная доставка по Кокчетаву <b>от 10 тыс ₸</b></span>
                </div>
            </div>
        </div>
    )
}
export default Hero;