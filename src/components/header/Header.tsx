import Button from "../button/Button";
import styles from "./Header.module.scss"
function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrap}>
                <nav>
                    <div>
                        <i></i>
                        <p> г. Кокчетав, ул. Ж. Ташенова 129Б<br />
                            (Рынок Восточный)</p>
                    </div>
                    <div>
                        <i></i>
                        <p>opt.sultan@mail.ru <br />
                            На связи в любое время</p>
                    </div>
                    <a href="">О компании </a>
                    <a href=""> Доставка и оплата</a>
                    <a href="">Возврат </a>
                    <a href=""> Контакты</a>

                </nav>
                <nav>
                    <img src="src/assets/logo2.svg" alt=""></img>
                    <Button name="Каталог" icon="fa-solid fa-cart-plus" />
                    <input type="Поиск..." />
                    <ul>
                        <li>+7 (777) 490-00-91</li>
                        <li>время работы: 9:00-20:00</li>
                        <li> <a href="">Заказать звонок</a> </li>
                    </ul>
                    <img src="src/assets/phone.png" alt=""></img>
                    <Button name="Прайс-лист" icon="fa-solid fa-cart-plus" />
                    <i></i>
                    <span>Корзина</span>
                    <span>12 478 ₸</span>
                </nav>
            </div>

        </header>
    )
}
export default Header;