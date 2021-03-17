import { useEffect, useState } from 'react';
import { ArrowLeft } from "react-feather";
import { getNumOfItemsInCart, getTotalCostInCart } from "../../utils/redux/cartSlice";
import { ToastProvider } from "react-toast-notifications";
import { useSelector } from "react-redux";
import Cart from "../../components/Cart/cart";
import "./style.css";
import { Link } from "react-router-dom";
import OrderSummary from '../../components/OrderSummary/orderSummary'
import { Elements } from 'react-stripe-elements';

const CartPage = (props) => {
  const numOfItemsInCart = useSelector(getNumOfItemsInCart);
  const cartItems = useSelector((state) => state.cart);
  const totalCostInCart = useSelector(getTotalCostInCart);

  const [showOrderSummary, setShowOrderSummary] = useState(false);

  useEffect(() => {
    totalCostInCart <= 0
      ? setShowOrderSummary(false)
      : setShowOrderSummary(true);
  }, [totalCostInCart]);

  console.log(numOfItemsInCart);
  return (
    <Elements>
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
              You have {numOfItemsInCart} item{numOfItemsInCart === 1 ? "" : "s"}{" "}
            in your cart
          </div>
          </div>
          <div className="cart_list">
            {cartItems.map((item) => (
              <Cart
                key={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
                img={item.img}
                width={item.width}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        {showOrderSummary && (
          <div className="order_summary">
            <ToastProvider placement="top-center">
              <OrderSummary />
            </ToastProvider>
          </div>
        )}
      </div>
    </Elements>
  );
};

export default CartPage;