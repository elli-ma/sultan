import styles from "./Map.module.scss";
import Button from "../button/Button";

function Map() {
    return (
        <div className={styles.map}>
            <div className={styles.wrap}>
                <div className={styles.info}>
                    <h3 className={styles.title}>Контакты</h3>
                    <span className={styles.text}>Оптовый поставщик «Султан»</span>
                    <div className={styles.block}>
                        <section className={styles.block__item}>
                            <h5 className={styles.block__title}>Адрес:</h5>
                            <i className="icon-map">   </i>
                            <span className={styles.block__text}>г. Кокчетав, ул. Ж. Ташенова 129Б
                                (Рынок Восточный)</span>
                        </section>
                        <section className={styles.block__item}>
                            <h5 className={styles.block__title}>Отдел продаж:</h5>
                            <i className=""></i>
                            <span className={styles.block__text}>+7 (777) 490-00-91 <br /> opt.sultan@mail.ru</span>
                        </section>
                        <section className={styles.block__item}>
                            <h5 className={styles.block__title}>Данные налогоплательщика:</h5>
                            <i className=""></i>
                            <span className={styles.block__text}>ИП Катран Д.С. <br />
                                                            ИИН: 860113450858</span>
                        </section>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Map;