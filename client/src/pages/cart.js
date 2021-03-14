import React from "react";
import './checkout-page.css';
import Footer from "../components/footer";
function checkoutpage () {
    return (
    <div class="shopping-cart">
      <!-- Title -->
      <div class="title">
        Shopping Bag
      </div>

      <!-- Product #1 -->
      <div class="item">
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>

        <div class="image">
          <img src="item-1.png" alt="" />
        </div>

        <div class="description">
          <span>Produce</span>
          <span>eggs</span>

        </div>

        <div class="quantity">
          <button class="plus-btn" type="button" name="button">
          +
          </button>
          <input type="text" name="name" value="1">
          <button class="minus-btn" type="button" name="button">
         -
          </button>
        </div>

        <div class="total-price">{}</div>
      </div>

      <!-- Product #2 -->
      <div class="item">
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>

        <div class="image">
          <img src="item-2.png" alt=""/>
        </div>

        <div class="description">
          <span>Dairy</span>
          <span>Milk</span>
         
        </div>

        <div class="quantity">
          <button class="plus-btn" type="button" name="button">
            +
          </button>
          <input type="text" name="name" value="1">
          <button class="minus-btn" type="button" name="button">
            -
          </button>
        </div>

        <div class="total-price">{price}</div>
      </div>

      <!-- Product #3 -->
      <div class="item">
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>

        <div class="image">
          img src
        </div>

        <div class="description">
          <span>Beverages</span>
          <span>Water</span>
          <span>Brown</span>
        </div>

        <div class="quantity">
          <button class="plus-btn" type="button" name="button">
            +
          </button>
          <input type="text" name="name" value="1">
          <button class="minus-btn" type="button" name="button">
            -
          </button>
        </div>

        <div class="total-price">PRICE</div>
</div>
</div>
      <div class="Card-Details">
        <!-- Title -->
        <div class="Card-Details">
          Card Details
        </div>
  
        <form action="/action_page.php" method="get">
            <label for="fname">Name on card</label>
            <input type="text" id="fname" name="fname"><br><br>
            <label for="lname">Card information</label>
            <input type="text" id="lname" name="lname"><br><br>
            <label for="fname">Expiration Date</label>
            <input type="text" id="fname" name="fname">
            <label for="fname">CVV</label>
            <input type="text" id="fname" name="fname">
            <div class="checkout-button">
            <button class="checkout" type="button" name="button"style="text-align: center">
               Checkout 
              </button>
              <div/>
          </form>
    </div>

    <script type="text/javascript">
      $('.minus-btn').on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		var $input = $this.closest('div').find('input');
    		var value = parseInt($input.val());

    		if (value > 1) {
    			value = value - 1;
    		} else {
    			value = 0;
    		}

        $input.val(value);

    	});

    	$('.plus-btn').on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		var $input = $this.closest('div').find('input');
    		var value = parseInt($input.val());

    		if (value < 100) {
      		value = value + 1;
    		} else {
    			value =100;
    		}

    		$input.val(value);
    	});

      $('.like-btn').on('click', function() {
        $(this).toggleClass('is-active');
      });
      );
 }