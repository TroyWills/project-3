import React, { Component } from "react";
// import { CardNumberElement, CardExpiryElement, CardCvcElement } from 'react-stripe-elements'



// import './checkout-page.css';
// import Footer from "../components/footer";
class Cart extends Component {
  render() {
    return (
      <>
        <div className="shopping-cart">
          <div className="title">
            Shopping Bag
      </div>
          {/* <CardNumberElement /> */}
        </div>

        <div className="item">
          <div className="buttons">
            <span className="delete-btn"></span>
            <span className="like-btn"></span>
          </div>

          <div className="image">
            <img src="item-1.png" alt="" />
          </div>

          <div className="description">
            <span>Produce</span>
            <span>eggs</span>

          </div>

          <div className="quantity">
            <button className="plus-btn" type="button" name="button">
              +
          </button>
            <input type="text" name="name" value="1" />
            <button className="minus-btn" type="button" name="button">
              -
          </button>
          </div>

          <div className="total-price">{ }</div>
        </div>


        <div className="item">
          <div className="buttons">
            <span className="delete-btn"></span>
            <span className="like-btn"></span>
          </div>

          <div className="image">
            <img src="item-2.png" alt="" />
          </div>

          <div className="description">
            <span>Dairy</span>
            <span>Milk</span>

          </div>

          <div className="quantity">
            <button className="plus-btn" type="button" name="button">
              +
          </button>
            <input type="text" name="name" value="1" />
            <button className="minus-btn" type="button" name="button">
              -
          </button>
          </div>

        </div>


        <div className="item">
          <div className="buttons">
            <span class="delete-btn"></span>
            <span class="like-btn"></span>
          </div>

          <div className="image">
            img src
        </div>

          <div className="description">
            <span>Beverages</span>
            <span>Water</span>
            <span>Brown</span>
          </div>

          <div className="quantity">
            <button className="plus-btn" type="button" name="button">
              +
          </button>
            <input type="text" name="name" value="1" />
            <button className="minus-btn" type="button" name="button">
              -
          </button>
          </div>

          <div className="total-price">PRICE</div>
        </div>
        <div className="Card-Details">

        </div>

        <form action="/action_page.php" method="get">
          <label for="fname">Name on card</label>
          <input type="text" id="fname" name="fname" />
          <label for="lname">Card information</label>
          {/* <CardNumberElement /> */}
          <label for="fname">Expiration Date</label>
          {/* <CardExpiryElement /> */}
          <label for="fname">CVV</label>
          {/* <CardCvcElement /> */}
          <div className="checkout-button">
            <button className="checkout" type="button" name="button">
              Checkout
              </button>
          </div>
        </form>
      </>
    )
  }
}

export default Cart
