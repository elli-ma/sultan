import Button from "../button/Button";
import styles from "./Footer.module.scss"

import logoUrl from '../../assets/logo.svg'
import waUrl from '../../assets/wa.png'
import telegramUrl from '../../assets/telegram.png'
import visaUrl from '../../assets/Visa.png'
import mcUrl from '../../assets/mc.png'

function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.wrap}>


                <div className={styles.block}>
                    <div className={styles.logo_prise}>
                        <img className={styles.logo} src={logoUrl} alt=""></img>
                        <div className={styles.button}>
                            <Button name="Прайс-лист" icon="fa-solid fa-arrow-down" size="button_small2" />
                        </div>
                    </div>
                    <p>Компания «Султан» — снабжаем розничные магазины товарами
                        "под ключ" в Кокчетаве и Акмолинской области
                    </p>
                    <span>Подпишись на скидки и акции</span>

                    <div className={styles.input_button}>
                        <input type="text" placeholder="Введите ваш E-mail" />
                        <Button icon="fa-solid fa-chevron-right" size="button_circle" />
                    </div>
                </div>


                <div className={styles.menu_category}>
                    <div>
                        <h4 className={styles.title}>Меню сайта:</h4>
                        <ul className={styles.link}>
                            <li> <a href="">О компании</a></li>
                            <li><a href="">Доставка и оплата</a></li>
                            <li><a href="">Возврат</a></li>
                            <li><a href="">Контакты</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.title}>Категории:</h4>
                        <ul className={styles.link}>
                            <li><a href="">Бытовая химия</a></li>
                            <li><a href="">Косметика и гигиена</a></li>
                            <li><a href="">Товары для дома</a></li>
                            <li><a href="">Товары для детей и мам</a></li>
                            <li><a href="">Посуда</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.contacts}>

                    <div className={styles.prise}>
                        <h4 className={styles.title}>Скачать прайс-лист:</h4>
                        <ul className={styles.link}>
                            <li>
                                <Button name="Прайс-лист" icon="fa-solid fa-arrow-down" size="button_big" />
                            </li>
                            <li>Связь в мессенджерах:</li>
                            <li>
                                <img src={waUrl} alt="" />
                                <img src={telegramUrl} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className={styles.prise_small}>
                        < ul>
                            <li>Связь в мессенджерах:</li>
                            <li>
                                <img src={waUrl} alt="" />
                                <img src={telegramUrl} alt="" />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.title}>Контакты:</h4>
                        <ul className={styles.link}>
                            <li>
                                <div><h5>+7 (777) 490-00-91</h5></div>
                                <div>время работы: 9:00-20:00</div>
                                <div className={styles.line}> <a href="">Заказать звонок</a> </div>
                            </li>
                            <li>opt.sultan@mail.ru <br />
                                На связи в любое время </li>
                            <li>
                                <img src={visaUrl} alt="" />
                                <img src={mcUrl} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer >

    )
}
export default Footer;