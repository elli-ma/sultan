import Button from "../button/Button";
import styles from "./Thank.module.scss"

function Thank({ close }: { close: () => any }) {
    return (
        <div className={styles.thank}>
            <div className={styles.i}>
                <button className={styles.i} onClick={close}>
                    <i className="fa-solid fa-xmark"  ></i>
                </button>

            </div>

            <div className={styles.block}>
                <Button icon="fa-solid fa-check" size="button_circle_big" />
                <h2>Спасибо за заказ</h2>
                <p>Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
        </div>

    )
}
export default Thank;