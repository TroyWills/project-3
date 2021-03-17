import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import "./style.css";
import {
  DELIVERY_FEE,
  ORDER_MINIMUM_ERROR,
  THE_MINI_DEMO_INFO,
} from "../../utils/helper";

import { getTotalCostInCart } from "../../utils/redux/cartSlice";

const OrderSummary = () => {
  const totalCostInCart = useSelector(getTotalCostInCart);
  const { addToast } = useToasts();
  console.log(totalCostInCart);
  return (
    <div className="order_summary">
      <div className="heading">Card details</div>
      <div className="form">
        <div className="input_title">Name on card</div>
        <input className="input" />
        <div className="input_title">Card information</div>
        <input className="input" />
        <div className="exp_cvv">
          <div>
            <div className="input_title">Expiration Date</div>
            <input className="input" />
          </div>
          <div>
            <div className="input_title">CVV</div>
            <input className="input" />
          </div>
        </div>
      </div>
      <div className="subtotal">
        <div>Subtotal</div>
        <div>${totalCostInCart.toFixed(2)}</div>
      </div>
      <div className="delivery_fee">
        <div>Delivery fee </div>
        <div>${DELIVERY_FEE}</div>
      </div>
      <div className="total_cost">
        <div>Total</div>
        <div>${`${(totalCostInCart + DELIVERY_FEE).toFixed(2)}`}</div>
      </div>
      <div
        className="checkout"
        onClick={() => {
          if (totalCostInCart < 10) {
            addToast(ORDER_MINIMUM_ERROR, {
              appearance: "error",
              autoDismiss: true,
            });
          } else {
            addToast(THE_MINI_DEMO_INFO, {
              appearance: "success",
              autoDismiss: true,
            });
          }
        }}
      >
        <div>Checkout</div>
      </div>
    </div>
  );
};

export default OrderSummary;