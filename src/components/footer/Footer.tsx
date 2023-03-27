import Button from "../button/Button";
import Input from "../input/Input"
import styles from "./Footer.module.scss"


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrap}>
                <div className={styles.block}>
                    <img src="src/assets/logo.svg" alt=""></img>
                    <ul className={styles.link}>
                        <li>Компания «Султан» — снабжаем розничные магазины товарами
                            "под ключ" в Кокчетаве и Акмолинской области</li>
                        <li>
                            <p>Подпишись на скидки и акции</p>

                            <Input name="Введите ваш E-mail" icon =""/>
                            
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className={styles.title}>Меню сайта:</h4>
                    <ul className={styles.link}>
                        <li>О компании</li>
                        <li>Доставка и оплата</li>
                        <li>Возврат</li>
                        <li>Контакты</li>

                    </ul>
                </div>
                <div>
                    <h4 className={styles.title}>Категории:</h4>
                    <ul className={styles.link}>
                        <li>Бытовая химия</li>
                        <li>Косметика и гигиена</li>
                        <li>Товары для дома</li>
                        <li>Товары для детей и мам</li>
                        <li>Посуда</li>
                    </ul>
                </div>
                <div>
                    <h4 className={styles.title}>Скачать прайс-лист:</h4>
                    <ul className={styles.link}>
                        <li>
                            <Button name="Прайс-лист" icon="fa-solid fa-cart-plus" />
                        </li>
                        <li>Связь в мессенджерах:</li>
                        <li>
                            <i></i>
                            <i></i>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className={styles.title}>Контакты:</h4>
                    <ul className={styles.link}>
                        <li>+7 (777) 490-00-91<br />
                            время работы: 9:00-20:00<br />
                            <a href="">Заказать звонок</a>
                        </li>

                        <li>opt.sultan@mail.ru <br />
                            На связи в любое время </li>
                        <li>
                            <i></i>
                            <i></i>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>

    )
}
export default Footer;