import { ArrowLeft } from 'react-feather'
import {getNumOfItemsInCart} from '../../utils/redux/cartSlice'
import {useSelector} from 'react-redux'
import "./style.css";

const Cart = () => {
  const numOfItemsInCart = useSelector(getNumOfItemsInCart);
  return (
    <div className="cart">
      <div className="cart_details">
        <div className="continue_shopping">
          <a href="/">
            <ArrowLeft />
              Continue Shopping
            </a>
        </div>
        <div className="checkout_heading">
          <div className="heading">Cart</div>
          <div>
            You have {numOfItemsInCart} item{numOfItemsInCart === 1 ? '' : 's'}{' '}
            in your cart
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
