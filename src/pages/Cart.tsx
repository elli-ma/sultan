import Button from '../components/button/Button';
import type { Product } from '../types'

function Cart({ cart }: { cart: Product[] }) {
  return (
    <div>
      <div>
        <span>Главная</span>
        <span>Корзина</span>
      </div>
      <h1>Корзина</h1>

      <div >
        <img src="" alt="" />
        <div>
          <span>450 мл</span>
          <h3>AOS средство для мытья посуды Crystal</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. </p>
        </div>

        {/* <div className={styles.add}>
          <button className={styles.minus}>-</button>
          <span>1</span>
          <button className={styles.plus}>+</button>
        </div> */}
        <h4>48,76 ₸</h4>
        <Button icon="" size="button_circle_big" />

      </div>
      <Button name="Оформить заказ" size="button_big"/>

    </div>
  )
}

export default Cart;