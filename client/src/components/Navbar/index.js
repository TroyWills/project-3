import React from "react";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { ShoppingCart } from "react-feather";
import { useSelector } from "react-redux";
import { getNumOfItemsInCart } from "../../utils/redux/cartSlice";
import { Link } from "react-router-dom";


function Navbar(props) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const numOfItemsInCart = useSelector(getNumOfItemsInCart);

  function filter(category) {
    if (category === "all") {
      props.setFilteredProducts(props.products);
    } else {
      let newList = props.products.filter(
        (product) => product.category === category
      );

      // console.log(newList);

      props.setFilteredProducts(newList);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="pull-left navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <a className="navbar-brand" href="/">
          
          The Mini Mart
        </a>
     
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a
                    onClick={() => filter("all")}
                    className="dropdown-item"
                    href="#"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => filter("produce")}
                    className="dropdown-item"
                    href="#"
                  >
                    Produce
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => filter("dairy")}
                    className="dropdown-item"
                    href="#"
                  >
                    Dairy
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => filter("snacks")}
                    className="dropdown-item"
                    href="#"
                  >
                    Snacks
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => filter("drinks")}
                    className="dropdown-item"
                    href="#"
                  >
                    Drink
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => filter("personal")}
                    className="dropdown-item"
                    href="#"
                  >
                    Personal Care
                  </a>
                </li>
              </ul>
            </li>
            {!isAuthenticated && (
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={loginWithRedirect}>
                  Login
                </a>
              </li>
            )}
            {isAuthenticated && (
              <li class="nav-item">
                <a class="nav-link" href="/" onClick={logout}>
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="cart">
          {numOfItemsInCart > 0 ? (
            <>
              <div className="cart_icon">{numOfItemsInCart}</div>
              <div className="cart_icon2">
                {/* <a href="/cart"><ShoppingCart /></a> */}
                <Link to="/cart">
                  <ShoppingCart />
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;