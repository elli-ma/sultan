import Button from "../button/Button";
import styles from "./Input.module.scss"


function Input({ name, icon }: { name?: string, icon: string }) {
    return (
        <div >
            <input className={styles.input} type={name} />

        </div>

    )
}
export default Input;