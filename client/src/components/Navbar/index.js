import React from "react";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { ShoppingCart } from "react-feather";
import { useSelector } from "react-redux";
import { getNumOfItemsInCart } from "../../utils/redux/cartSlice";

function Navbar(props) {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  const numOfItemsInCart = useSelector(getNumOfItemsInCart);

  console.log("Number: " + numOfItemsInCart);

  function filter(category) {
    if (category === "all") {
      props.setFilteredProducts(props.products);
    } else {
      let newList = props.products.filter((product) => product.category === category)
  
      console.log(newList);
  
      props.setFilteredProducts(newList);
    }
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="pull-left navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">
          The Mini Mart
        </a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a onClick={() => filter("all")}class="dropdown-item" href="#">
                    All
                  </a>
                </li>
                <li>
                  <a onClick={() => filter("produce")}class="dropdown-item" href="#">
                    Produce
                  </a>
                </li>
                <li>
                  <a  onClick={() => filter("dairy")}class="dropdown-item" href="#">
                    Dairy
                  </a>
                </li>
                <li>
                  <a onClick={() => filter("snacks")}class="dropdown-item" href="#">
                    Snacks
                  </a>
                </li>
                <li>
                  <a onClick={() => filter("drinks")}class="dropdown-item" href="#">
                    Drink
                  </a>
                </li>
                <li>
                  <a onClick={() => filter("personal")}class="dropdown-item" href="#">
                    Personal Care
                  </a>
                </li>
              </ul>
            </li>
            {!isAuthenticated && (
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={loginWithPopup}>
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
            <div className="cart">
              {numOfItemsInCart > 0 ? (
                <>
                  <div className="cart_icon">{numOfItemsInCart}
                  </div>
                  <div className="cart_icon2">
                    <a href="/cart"><ShoppingCart /></a>
                  </div>
                </>
              ): null}
            </div>
      </div>
    </nav>
  );
}

export default Navbar;
