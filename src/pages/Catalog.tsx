import { useState, useMemo } from 'react'
import {Form, Link, useSearchParams } from 'react-router-dom'
import Products from "../components/products/Products"
import type { Product, Category } from '../types'
import styles from './Catalog.module.scss'
import Button from '../components/button/Button'
import Sort, { Choice } from '../components/sort/Sort'

function Catalog({ catalog, category }: { catalog: Product[], category: { parameters: Category[] } }) {

    let [searchParams, setSearchParams] = useSearchParams()
    let [selected, setSelected] = useState<Choice>('популярности')

    const minPrice = Number(searchParams.get("minPrice") ?? '0');
    const maxPrice = Number(searchParams.get('maxPrice') ?? '1000');
    const sub = searchParams.getAll("sub")
    const search = searchParams.get('search') ?? ''
    const firms = searchParams.getAll('firms')

    const bound = (d: number) => Math.min(Math.max(d, 0), 1000)
    const getSearchResult = () => catalog.filter(product => {
        return (
            minPrice <= product.price &&
            maxPrice >= product.price &&
            [product.description, product.name, product.brand, product.manufacturer].some(p => p.includes(search)) &&
            (firms.length == 0 || firms.some(f => f == product.manufacturer)) &&
            (sub.length == 0 || sub[0] == '' || sub.every(f => product.category.includes(Number(f))))
        )
    })

    const catalogResult = useMemo(getSearchResult, [minPrice, maxPrice, search, sub, firms])
    const key = {
        'популярности': 'popularity',
        'цене': 'price',
        'названию': 'name'
    }[selected];

    catalogResult.sort(function (obj1, obj2) {
        if (obj1[key] < obj2[key]) return -1;
        if (obj1[key] > obj2[key]) return 1;
        return 0;
    })

    const manufacturers = [...new Set(catalog.map(m => m.manufacturer))]

    return (
        <div className={styles.catalog}>
            <div className={styles.wrap}>
                <div>
                    <ul className="crumbs">
                      <li> <Link to="/sultan/"><a href="">Главная</a></Link> </li>
                        <li className="end_crumb">Косметика и гигиена</li>
                    </ul>

                    <div className={styles.back}>
                    <Link to="/sultan/"><Button icon="icon-arrow-left" size="button_circle_small" /></Link> 
                        <span className={styles.back_text}>Назад</span>
                    </div>

                    <div className={styles.title_sort}>
                        <h2 className={styles.title}>Косметика и гигиена</h2>
                        <div className={styles.sort_item}>
                            <Sort value={selected} onChangeSort={(i) => setSelected(i)} />
                        </div>
                    </div>

                    <nav className={styles.header_buttons}>
                        {
                            category.parameters.map(param => <Link to={`/sultan/catalog/?sub=${sub.includes(param.id.toString()) ? '' : param.id}`} relative="path" key={param.name} className={sub.includes(param.id.toString()) ? styles.active_button : styles.button_white}>{param.name}</Link>)
                        }
                    </nav>
                </div>

                <div className={styles.block}>
                    <div className={styles.navbar}>
                        <Form className={styles.navbar} action="">
                            <h4 className={styles.block_title}>ПОДБОР ПО ПАРАМЕТРАМ</h4>
                            <h5 className={styles.h5}>Цена ₸</h5>

                            <div className={styles.add_prise}>
                                <input className={styles.start} type="number" name="minPrice" defaultValue={minPrice} />
                                <p>-</p>
                                <input className={styles.start} type="number" name="minPrice" defaultValue={maxPrice} />
                            </div>

                            <div className={styles.input_button}>
                                <input className={styles.manufacturer} type="text" name="search" placeholder="поиск" defaultValue={search} />
                                <Button type="submit" icon="icon-magnify" size="button_circle" />
                            </div>

                            {/* <div className={styles.manufacturer}>
                                {manufacturers.map(m => <div key={m}>{m}<input className={styles.check} name="firms" value={m} type="checkbox" /></div>)}
                            </div> */}
                            <div className={styles.buttons}>
                                <Button name="Показать" size="button_big" type="submit" />
                                <Button icon="icon-delete" size="button_circle_big" />
                            </div>

                            {/* <fieldset className={styles.category}>
                                {category.parameters.map(param => <label key={param.name}> {param.name} </label >)}
                            </fieldset> */}
                        </Form>

                        <div className={styles.sort_item2}>
                            <Sort value={selected} onChangeSort={(i) => setSelected(i)} />
                        </div>

                    </div>
                    <div className={styles.block_right}>
                        <Products catalog={catalogResult} />
                        <ul className={styles.nav_footer}>
                            <li><i className='icon-arrow-left'></i></li>
                            <li><button > 1</button></li>
                            <li><button > 2</button></li>
                            <li><button > 3</button></li>
                            <li><button > 4</button></li>
                            <li><button > 5</button></li>
                            <li><i className='icon-arrow-right'></i></li>
                        </ul>

                        <p className={styles.text_footer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam interdum ut justo, vestibulum sagittis iaculis iaculis.
                            Quis mattis vulputate feugiat massa vestibulum duis.
                            Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis.
                            Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Catalog;