import styles from "./Sort.module.scss"
import { useState } from "react";
function Sort() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(0);
    const list = ["популярности", "цене", "названию"];
    const onClickListItem = (i) => {
        setSelected(i);
        setOpen(false);
    }
    return (

        <div className={styles.sort}>
            <div className={styles.label}>
                <h5>Сортировка:</h5>
                <span onClick={() => setOpen(!open)}>&nbsp;{list[selected]}</span>
               {(open==false)?<i className="icon-down" ></i>:<i className="icon-up" ></i>} 
            </div>
            {open && (<div className={styles.popup}>
                <ul>
                    {list.map((name, i) => (
                        <li
                            key={i}
                            onClick={() => onClickListItem(i)}
                            className={(selected == i) ? styles.active : ''}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>)
            }
        </div>)

}

export default Sort;