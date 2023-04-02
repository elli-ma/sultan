import  "./Button.scss"

function Button({ name, icon, size, onClick, type }: { name?: string, icon?: string, size: string, type?: any, onClick?: () => void }) {

    return (
        <button className={size} type={type} onClick={onClick}> {name}< i className={icon} ></i ></button >
    )
}
export default Button;