import  "./Button.scss"

function Button({ name, icon, size }: { name?: string, icon: string, size: string }) {

    return (
        <button className={size}> {name} < i className={icon} ></i ></button >
    )
}
export default Button;