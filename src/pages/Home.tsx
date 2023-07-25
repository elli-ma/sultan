import styles from "./Home.module.scss"
import Hero from "../components/hero/Hero";
import MapKazakhstan from "../components/map/Map";
import StockProducts from "../components/stockProducts/StockProducts";
import Promotion from "../components/promotion/Promotion";

function Home() {
    return (
        <div className={styles.home}>
             <Hero/>  
             <StockProducts/>          
             <Promotion/>             
             <MapKazakhstan/>
        </div>       
    )
}

export default Home;