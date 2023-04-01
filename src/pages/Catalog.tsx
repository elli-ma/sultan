import { useLoaderData } from 'react-router-dom'
import Products from "../components/products/Products"
import type { Product } from '../types'
import styles from './Catalog.module.scss'

function Catalog({ catalog, category }: { catalog: Product[], category: { parameters: { name: string }[] } }) {
    return (
        <div className ={styles.Catalog}>
            <div>
                <nav>
                    <li>Главная</li>
                    <li>Косметика и гигиена</li>
                </nav>
                <div>
                    <h1>Косметика и гигиена</h1>
                    <span>Сортировка:</span>  <span>Название</span>
                </div>
                <nav className={styles.header}>
                    {
                        category.parameters.map(param => <li><button>{param.name}</button></li>)
                    }
                </nav>
            </div>



            <div className={styles.block}>
                <div>
                    <h4>ПОДБОР ПО ПАРАМЕТРАМ</h4>
                    <span>Цена</span>
                    <input type="text" />
                    <input type="text" />

                    <h4>Производитель</h4>
                    <input type="text" />
                    {
                        category.parameters.map(param => <li><a>{param.name}</a></li>)
                    }

                </div>
                <Products catalog={catalog} />
            </div>

        </div>

    )
}

export default Catalog;