import styles from "./Button.module.scss"

function Button({ name, icon }: { name?: string, icon: string }) {
    return (
        <button className={styles.button_main}> {name} <i className={icon}></i></button>
    )
}
export default Button;