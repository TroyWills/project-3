import React from "react";
import './navbar.css';
import shoppingCart from "./shopping-cart.png"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" id="name" href="#">The Mini Mart</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
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
                  <a class="dropdown-item" href="/cart">
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
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={loginWithPopup}>
                  Login
                </a>
              </li>
            )}
            <div className="cart" onclick='/cart'>
              <a className="nav-link" href="/cart">
                <ShoppingCart />
                {numOfItemsInCart > 0 && (
                  <button className="cart_icon" onclick='/cart'>{numOfItemsInCart}</button >
                )}
            </div>
          </ul>
            <div>
              <img href="cart.js" className="nav-link" id="shopCart" src={shoppingCart} />
            </div>
        </div>
        </div>
    </nav >
  );
}

export default Navbar;

