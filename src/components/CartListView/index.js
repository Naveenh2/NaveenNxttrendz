import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'
import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalAmount = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )
      const totalItems = cartList.length

      return (
        <>
          <ul className="cart-list">
            {cartList.map(item => (
              <CartItem key={item.id} cartItemDetails={item} />
            ))}
          </ul>

          {/* ✅ Order Total Section */}
          <div className="cart-summary-container">
            <div className="order-total-container">
              <h1 className="order-total-label">
                Order Total:{' '}
                <span className="order-total-value">Rs {totalAmount}/-</span>
              </h1>
              <p className="total-items">{totalItems} Items in cart</p>
            </div>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
