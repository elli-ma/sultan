import { useLoaderData, useSearchParams, Form } from 'react-router-dom'
import Products from "../components/products/Products"
import type { Product } from '../types'
import styles from './Catalog.module.scss'
import Button from '../components/button/Button'
import { useState } from 'react'

function Catalog({ catalog, category }: { catalog: Product[], category: { parameters: { name: string }[] } }) {

    // let [ searchParams, setSearchParams] = useSearchParams()
    
    // const minPrice = searchParams.get("minPrice") ?? 0;
    // const maxPrice = searchParams.get('maxPrice') ?? 1000;

    const [ minPrice, setMinPrice] = useState(0)
    const [ maxPrice, setMaxPrice] = useState(1000)



    return (
        <div className={styles.catalog}>
            <div className={styles.wrap}>
                <div>
                    <ul className="crumbs">
                        <li> <a href="">Главная</a></li>
                        <li className="end_crumb"> Косметика и гигиена</li>
                    </ul>
                    <div className={styles.title_sort}>
                        <h2>Косметика и гигиена</h2>
                        <div>
                            <span>Сортировка:</span>
                            <span>Название</span>
                        </div>
                    </div>

                    <nav className={styles.header_buttons}>
                        {
                            category.parameters.map(param => <button key={param.name} className={styles.button_white}>{param.name}</button>)
                        }
                    </nav>
                </div>



                <div className={styles.block}>
                    <div className={styles.navbar}>
                        <h4 className={styles.block_title}>ПОДБОР ПО ПАРАМЕТРАМ</h4>
                        <h5>Цена ₸</h5>

                        <div className={styles.add_prise}>
                            <input className={styles.start} type="number" name="minPrice" defaultValue={minPrice} onChange={e => Number(e.target.value) >= 0 ? setMinPrice(Number(e.target.value)) : 0 }/>
                            <p>-</p>
                            <input className={styles.start} type="number" name="minPrice" defaultValue={maxPrice} onChange={e => Number(e.target.value) >= 0 ? setMaxPrice(Number(e.target.value)) : 0}/>
                        </div>

                        <h5>Производитель</h5>
                        <div className={styles.input_button}>
                            <input className={styles.manufacturer} type="text" name="title" placeholder="поиск" />
                            <Button type="submit" icon="fa-solid fa-magnifying-glass" size="button_circle" />
                        </div>

                        <div>
                            {/* {catalog.map(m=> {m.manufacturer} <input type="checkbox" />)}  */}
                        </div>
                        <div className={styles.buttons}>
                            <Button name="Показать" icon="" size="button_big" />
                            <Button icon="fa-solid fa-trash-can" size="button_circle_big" />
                        </div>

                        <div className={styles.category}>
                            {category.parameters.map(param => <a key={param.name}>{param.name}</a>)}
                        </div>

                    </div>
                    <Products catalog={catalog} />
                </div>
            </div>
        </div>

    )
}

export default Catalog;