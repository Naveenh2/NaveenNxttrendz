import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = props => {
  const {cartItemDetails} = props
  const {id, title, brand, imageUrl, price, quantity} = cartItemDetails

  return (
    <CartContext.Consumer>
      {value => {
        const {deleteCartItem, updateCartItemQuantity} = value

        return (
          <li className="cart-item">
            <img src={imageUrl} alt={title} className="cart-product-image" />

            <div className="cart-item-details-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>

            {/* ✅ Quantity Controls */}
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                onClick={() => updateCartItemQuantity(id, 'decrement')}
              >
                <BsDashSquare className="quantity-controller-icon" />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
                onClick={() => updateCartItemQuantity(id, 'increment')}
              >
                <BsPlusSquare className="quantity-controller-icon" />
              </button>
            </div>

            {/* ✅ Total price per item */}
            <p className="cart-total-price">Rs {price * quantity}/-</p>

            {/* ✅ Remove item */}
            <button
              type="button"
              className="delete-button"
              onClick={() => deleteCartItem(id)}
            >
              <AiFillCloseCircle className="delete-icon" />
            </button>
          </li>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartItem
