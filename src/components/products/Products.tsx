import styles from "./Products.module.scss"
import Item from "./Item";

function Products({ data }: { data: any }) {
    return (
        <div className={styles.product}>
            <div className={styles.wrap}>
                {data.catalog.map(x => <Item key={x.id} product={x} />)}
            </div>
        </div>
    )
}
export default Products;