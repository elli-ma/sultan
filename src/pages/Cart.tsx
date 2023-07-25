import { useState } from 'react';

import { addProduct, removeProduct, clear } from '../features/cart/cartSlice';
import { useAppSelector, useAppDispatch } from '../hooks';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import Button from '../components/button/Button';
import Thank from '../components/thank/Thank';
import type { Product } from '../types'

function Cart() {
  const [showThank, setShowThank] = useState(false)
  const cart = useAppSelector(state => state.cart.value)
  const dispatch = useAppDispatch()
  const cartTotal = cart.reduce((r, p) => r + p.product.price * p.amount, 0).toFixed(2)

  function onPurchase() {
    setShowThank(true)
    dispatch(clear())
  }

  return (

    <div className={styles.cart}>
      {!showThank || <Thank close={() => setShowThank(false)} />}
      <div className={styles.wrap}>
        <ul className="crumbs">
          <li> <Link to="/sultan/"><a href="">Главная</a></Link> </li>
          <li className="end_crumb">Корзина</li>
        </ul>
        <div className={styles.back}>
        <Link to="/sultan/catalog/"><Button icon="icon-arrow-left" size="button_circle_small" /></Link>  
          <span className={styles.back_text}>Назад</span>
        </div>
        <h2 className={styles.title}>Корзина</h2>
        <hr />
        <div>
          {cart.map(({ product, amount }) => <div key={product.id}>
            <div className={styles.item}>

              <div className={styles.img_block}>
                <img className={styles.img} src={product.url} alt={product.description} />
              </div>

              <div className={styles.block}>
                <span>{product.weight}</span>
                <h3 className={styles.title_item}>{product.name}</h3>
                <p>{product.description}</p>
              </div>

              <div className={styles.block2}>
                <div className={styles.add}>
                  <button onClick={() => dispatch(removeProduct(product))} className={styles.minus}>-</button>
                  <span>{amount}</span>
                  <button onClick={() => dispatch(addProduct(product))} className={styles.plus}>+</button>
                </div>
                <h3 className={styles.price} >{(product.price * amount).toFixed(2)}</h3>
                <Button onClick={() => dispatch(removeProduct(product))} icon="icon-delete" size="button_circle_big" />
              </div>
            </div>

            <hr /></div>)}
        </div>

        <div className={styles.button_sum}>
          <Button onClick={onPurchase} name="Оформить заказ" size="button_big" />
          <h3>{cartTotal}  ₸</h3>
        </div>

      </div>
    </div >
  )
}

export default Cart;