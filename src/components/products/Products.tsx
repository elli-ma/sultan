import styles from "./Products.module.scss"
import Item from "./Item";

import { Product } from "../../types"

function Products({ catalog }: { catalog: Product[] }) {
    return (
        <div className={styles.product}>
            <div className={styles.wrap}>
                {catalog.map(x => <Item key={x.id} product={x} />)}
            </div>
        </div>
    )
}
export default Products;