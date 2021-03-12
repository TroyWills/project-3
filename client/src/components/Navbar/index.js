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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                Catagories
          </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="Prouduce">Produce</a></li>
                <li><a className="dropdown-item" href="Dairy">Dairy</a></li>
                <li><a className="dropdown-item" href="Snacks">Snacks</a></li>
                <li><a className="dropdown-item" href="Drinks">Drinks</a></li>
                <li><a className="dropdown-item" href="Personal">Personal Care</a></li>
              </ul>
            </li>
          </ul>
          <div>
            <img href="cart.js" className="nav-link" id="shopCart" src={shoppingCart} />
          </div>
        </div>
      </div>
    </nav>


  );
}

export default Navbar;

