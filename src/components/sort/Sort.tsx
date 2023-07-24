import styles from "./Sort.module.scss"
import { useState } from "react";

export type Choice = "популярности" | "цене" | "названию"
function Sort({value, onChangeSort} : {value: Choice, onChangeSort: (k: Choice) => any} ) {
    const [open, setOpen] = useState(false);
    const list = ["популярности", "цене", "названию"];
    const onClickListItem = (i) => {
        onChangeSort(i);
        setOpen(false);
    }

    return (

        <div className={styles.sort}>
            <div className={styles.label}>
                <h5>Сортировка:</h5>
                <span onClick={() => setOpen(!open)}>&nbsp;{value}</span>
                { !open ? <i className="icon-down" ></i> : <i className="icon-up" ></i>}
            </div>
            {open && (<div className={styles.popup}>
                <ul>
                    {list.map((name, i) => (
                        <li
                            key={i}
                            onClick={() => onClickListItem(list[i])}
                            className={(value == list[i]) ? styles.active : ''}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>)
            }
        </div>)

}

export default Sort;