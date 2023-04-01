import Button from "../button/Button";
import styles from "./Header.module.scss"
function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrap}>
                <nav className={styles.nav_header}>

                    <div className={styles.small_header} >
                        <Button icon="fa-solid fa-table-cells-large" size="button_circle_small" />
                        <img className={styles.logo_small} src="src/assets/logo2.svg" alt=""></img>
                        <div className={styles.shopping}>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>

                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <h5>г. Кокчетав, ул. Ж. Ташенова 129Б</h5>
                                <span>(Рынок Восточный)</span>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <i className="fa-regular fa-envelope"></i>
                            <div>
                                <h5>opt.sultan@mail.ru  </h5>
                                <span>На связи в любое время</span>
                            </div>
                        </div>
                    </div>

                    <ul className={styles.menu}>
                        <li><a href="">О компании </a></li>
                        <li><a href=""> Доставка и оплата</a></li>
                        <li><a href="">Возврат </a></li>
                        <li><a href=""> Контакты</a></li>
                    </ul>
                </nav>
            </div>
            <hr />

            <div className={styles.wrap}>
                <nav className={styles.nav_footer}>
                    <div className={styles.small_footer}>
                        <div>
                            <i className="fa-solid fa-table-cells-large"></i>
                            <span>Каталог</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span>Поиск</span>

                        </div>
                    </div>
                    <img className="logo" src="src/assets/logo2.svg" alt=""></img>
                    <Button name="Каталог" icon="fa-solid fa-table-cells-large" size="button_big" />
                    <div className={styles.input_button}>
                        <input type="text" placeholder="Поиск..." />
                        <Button icon="fa-solid fa-magnifying-glass" size="button_circle" />
                    </div>

                    <ul className={styles.link}>
                        <li><h5>+7 (777) 490-00-91</h5></li>
                        <li>время работы: 9:00-20:00</li>
                        <li > <a href="">Заказать звонок</a> </li>
                    </ul>
                    <div>
                        <img className={styles.call} src="src/assets/phone.png" alt=""></img>
                    </div>
                    <div className={styles.prise}>
                        <Button name="Прайс-лист" icon="fa-solid fa-arrow-down" size="button_big" />
                    </div>

                    <div className={styles.shopping}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <ul>
                            <li>Корзина</li>
                            <li ><h5>12 478 ₸</h5></li>
                        </ul>
                    </div>

                </nav>
            </div>
            <hr />
        </header >
    )
}
export default Header;