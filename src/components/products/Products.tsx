import styles from "./Products.module.scss"
import Item from "./Item";

function Products({ data }: { data: any }) {
    return (
        <div>
            {data.catalog.map(x => <Item key={x.id} product={x} />)}
        </div>
    )
}
export default Products;