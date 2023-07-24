import styles from "./Promotion.module.scss";
import Button from "../button/Button";

function Promotion() {
    return (
        <div className={styles.promotion}>
            <div className={styles.wrap}>
                <span className={styles.promotion__text}>*Акция действует до 04/09/22</span>
                <h2 className={styles.promotion__title}>Название Акции</h2>
                <p className={styles.promotion__text1}>Условия акции в пару строк, Условия акции
                    в пару строк, Условия акции в пару строк</p>
                <Button name="Принять участие" size="button_big"/>
            </div>
        </div>
    )
}
export default Promotion;