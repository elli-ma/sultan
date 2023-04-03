import Button from "../button/Button";
import styles from "./Thank.module.scss"

function Thank({ close }: { close: () => any }) {
    return (
        <div className={styles.thank}>
            <div className={styles.i}>
                <button className={styles.i} onClick={close}>
                    <i className="icon-close"  ></i>
                </button>

            </div>

            <div className={styles.block}>
                <Button icon="icon-chek" size="button_circle_big" />
                <h2 className={styles.title}>Спасибо за заказ</h2>
                <p className={styles.text}>Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
        </div>

    )
}
export default Thank;