import styles from "./StockProducts.module.scss";
import Products from "../products/Products";
import item from '../../mocks/products.mock.json'

function StockProducts() {
    return (
        <div className={styles.StockProducts}>
            <div className={styles.wrap}>
                <h3 className={styles.title}><b className={styles.title__start}>Акционные </b>товары</h3>
                <Products catalog={item.catalog} />
            </div>


        </div>
    )
}
export default StockProducts;