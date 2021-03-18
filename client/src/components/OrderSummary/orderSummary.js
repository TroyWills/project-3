import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import "./style.css";
import {
  DELIVERY_FEE,
  ORDER_MINIMUM_ERROR,
  THE_MINI_DEMO_INFO,
  PAYMENT_ERROR,
} from "../../utils/helper";

import { getTotalCostInCart } from "../../utils/redux/cartSlice";
import { injectStripe, CardCVCElement, CardExpiryElement, CardNumberElement, Elements } from "react-stripe-elements";
import Submit from "../../CheckoutForm";
import axios from 'axios'


const OrderSummary = (props) => {

  const stripe = props.stripe

  const submit = async (ev) => {
    // console.log(stripe)
    let { token } = await stripe.createToken({ name: "Name" });
    // console.log(token)
    await axios.post('/charge', {
      headers: { "Content-Type": "text/plain" },
      token: token?.id,
      amount: totalCharge,
    }
    ).then(res => {
      if (res.status === 200) {
        addToast(THE_MINI_DEMO_INFO, {
          appearance: "success",
          autoDismiss: true,
        });
      }
    })
      .catch(err => {
        addToast(PAYMENT_ERROR, {
          appearance: "error",
          autoDismiss: true,
        });
        console.log(err)
      })
  }

  const totalCostInCart = useSelector(getTotalCostInCart);
  const totalCharge = ((totalCostInCart + DELIVERY_FEE) * 100).toFixed(0)
  const { addToast } = useToasts();
  // console.log(totalCharge);
  return (
    <div className="order_summary">
      <div className="heading">Card details</div>
      <div className="form">
        <div className="input_title">Name on card</div>
        <input className="input" />
        <div className="input_title">Card information</div>
        <CardNumberElement />
        <div className="exp_cvv">
          <div>
            <div className="input_title">Expiration Date</div>
            <CardExpiryElement />
          </div>
          <div>
            <div className="input_title">CVV</div>
            <CardCVCElement />
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
          } else { submit() }
        }}>
        <div>Checkout</div>
      </div>
    </div>
  );
};

export default injectStripe(OrderSummary);