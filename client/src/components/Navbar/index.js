import React from "react";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { ShoppingCart } from "react-feather";
import { useSelector } from "react-redux";
import { getNumOfItemsInCart } from "../../utils/redux/cartSlice";

function Navbar() {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  const numOfItemsInCart = useSelector(getNumOfItemsInCart);

  console.log(numOfItemsInCart);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          The Mini Mart
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
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
                  <a class="dropdown-item" href="#">
                    Produce
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Dairy
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Snacks
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Drink
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
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
            <div className="cart">
              <ShoppingCart />
              {numOfItemsInCart > 0 && (
                <div className="cart_icon">{numOfItemsInCart}</div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;