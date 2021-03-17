import { ArrowLeft } from 'react-feather'
import {getNumOfItemsInCart} from '../../utils/redux/cartSlice'
import {useSelector} from 'react-redux'
import Cart from '../../components/Cart/cart'
import "./style.css";
import {Link} from "react-router-dom"
const CartPage = () => {

  const numOfItemsInCart = useSelector(getNumOfItemsInCart);
  const cartItems = useSelector((state) => state.cart);
  // const totalCostInCart = useSelector(getTotalCostInCart)

  console.log(numOfItemsInCart)
  return (
    <div className="cart">
      <div className="cart_details">
        <div className="continue_shopping">
          <Link to="/">
            <ArrowLeft />
              Continue Shopping
              </Link>
        </div>
        <div className="checkout_heading">
          <div className="heading">Cart</div>
          <div>
            You have {numOfItemsInCart} item{numOfItemsInCart === 1 ? '' : 's'}{' '}
            in your cart
          </div>
        </div>
        <div className="cart_list">
          {cartItems.map((item) => (
            <Cart
              key={item.name}
              name={item.name}
              // description={item.description}
              price={item.price}
              img={item.img}
              width={item.width}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CartPage
