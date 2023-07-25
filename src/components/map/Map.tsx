import styles from './Map.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

const MapKazakhstan: React.FC = () => {
    const position: LatLngTuple = [53.26736180271319, 69.40717205543683];

    return (
        <div className={styles.map}>
            <div className={styles.wrap}>
                <MapContainer center={[53.27087716317632, 69.39704621896092]} zoom={15} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            г. Кокчетав, ул. Ж. <br />Ташенова 129Б(Рынок Восточный)
                        </Popup>
                    </Marker>
                </MapContainer>
                <div className={styles.info}>
                    <h3 className={styles.title}>Контакты</h3>
                    <span className={styles.text}>Оптовый поставщик «Султан»</span>
                    <div className={styles.block}>
                        <section className={styles.block__item}>
                            <h5 className={styles.block__title}>Адрес:</h5>
                            <i className="icon-map">   </i>
                            <span className={styles.block__text}>г. Кокчетав, ул. Ж. Ташенова 129Б
                                (Рынок Восточный)</span>
                        </section>
                        <section className={styles.block__item}>
                            <h5 className={styles.block__title}>Отдел продаж:</h5>
                            <i className=""></i>
                            <span className={styles.block__text}>+7 (777) 490-00-91 <br /> opt.sultan@mail.ru</span>
                        </section>
                        <section className={styles.block__item}>
                            <h5 className={styles.block__title}>Данные налогоплательщика:</h5>
                            <i className=""></i>
                            <span className={styles.block__text}>ИП Катран Д.С. <br />
                                ИИН: 860113450858</span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapKazakhstan;


/* <div className={styles.map}>
<div className={styles.wrap}>
    <div className={styles.info}>
        <h3 className={styles.title}>Контакты</h3>
        <span className={styles.text}>Оптовый поставщик «Султан»</span>
        <div className={styles.block}>
            <section className={styles.block__item}>
                <h5 className={styles.block__title}>Адрес:</h5>
                <i className="icon-map">   </i>
                <span className={styles.block__text}>г. Кокчетав, ул. Ж. Ташенова 129Б
                    (Рынок Восточный)</span>
            </section>
            <section className={styles.block__item}>
                <h5 className={styles.block__title}>Отдел продаж:</h5>
                <i className=""></i>
                <span className={styles.block__text}>+7 (777) 490-00-91 <br /> opt.sultan@mail.ru</span>
            </section>
            <section className={styles.block__item}>
                <h5 className={styles.block__title}>Данные налогоплательщика:</h5>
                <i className=""></i>
                <span className={styles.block__text}>ИП Катран Д.С. <br />
                                                ИИН: 860113450858</span>
            </section>

        </div>
    </div>
</div>

</div>    */
