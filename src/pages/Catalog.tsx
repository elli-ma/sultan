import { useState, useMemo } from 'react'
import { useLoaderData, useParams, Form, Link } from 'react-router-dom'
import Products from "../components/products/Products"
import type { Product, Category } from '../types'
import styles from './Catalog.module.scss'
import Button from '../components/button/Button'
import Sort from '../components/sort/Sort'

function Catalog({ catalog, category }: { catalog: Product[], category: { parameters: Category[] } }) {

    // let [ searchParams, setSearchParams] = useSearchParams()

    // const minPrice = searchParams.get("minPrice") ?? 0;
    // const maxPrice = searchParams.get('maxPrice') ?? 1000;

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [search, setSearch] = useState('')
    const params = useParams()

    const bound = (d: number) => Math.min(Math.max(d, 0), 1000)
    const getSearchResult = () => catalog.filter(product => {
        return (
            minPrice <= product.price &&
            maxPrice >= product.price &&
            [product.description, product.name, product.brand, product.manufacturer].some(p => p.includes(search))
        )
    })
    const catalogResult = useMemo(getSearchResult, [minPrice, maxPrice, search])

    return (
        <div className={styles.catalog}>
            <div className={styles.wrap}>
                <div>
                    <ul className="crumbs">
                        <li> <a href="">Главная</a></li>
                        <li className="end_crumb"> Косметика и гигиена</li>
                    </ul>

                    <div className={styles.back}>
                        <Button icon="icon-arrow-left" size="button_circle_small" />
                        <span className={styles.back_text}>Назад</span>
                    </div>

                    <div className={styles.title_sort}>
                        <h2 className={styles.title}>Косметика и гигиена</h2>
                        <div className={styles.sort_item}>
                            <Sort />
                        </div>
                    </div>

                    <nav className={styles.header_buttons}>
                        {
                            category.parameters.map(param => <Link to={`/sultan/catalog/${param.id}`} relative="path" key={param.name} className={styles.button_white}>{param.name}</Link>)
                        }
                    </nav>
                </div>



                <div className={styles.block}>
                    <div className={styles.navbar}>

                        <h4 className={styles.block_title}>ПОДБОР ПО ПАРАМЕТРАМ</h4>
                        <h5 className ={styles.h5}>Цена ₸</h5>

                        <div className={styles.add_prise}>
                            <input className={styles.start} type="number" name="minPrice" value={minPrice} onChange={e => setMinPrice(bound(Number(e.target.value)))} />
                            <p>-</p>
                            <input className={styles.start} type="number" name="minPrice" value={maxPrice} onChange={e => setMaxPrice(bound(Number(e.target.value)))} />
                        </div>

                        <h5 className ={styles.h5}>Производитель</h5>

                        <div className={styles.input_button}>
                            <input className={styles.manufacturer} type="text" name="search" placeholder="поиск" value={search} onChange={e => setSearch(e.target.value)} />
                            <Button type="submit" icon="icon-magnify" size="button_circle" />
                        </div>

                        <div>
                            {/* {catalog.map(m=> {m.manufacturer} <input type="checkbox" />)}  */}
                        </div>

                        <div className={styles.buttons}>
                            <Button name="Показать" icon="" size="button_big" />
                            <Button icon="icon-delete" size="button_circle_big" />
                        </div>

                        <div className={styles.category}>
                            {category.parameters.map(param => <a key={param.name}>{param.name}</a>)}
                        </div>

                        <div className={styles.sort_item2}>
                            <Sort />
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