import "./App.css";
import Navbar from "./components/Navbar";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./pages/Home/home";
import Admin from "./pages/Admin/admin"
import { Provider } from "react-redux";
import { store } from "./utils/redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CartPage from "./pages/shopping-cart/cart";


function App() {
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await fetch("/api/grocery")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => err.message);
  };

  return (
    <Router>
      <div>
        {/* insert wrappers inside of Auth0Provider */}
        <Auth0Provider
          domain={process.env.REACT_APP_DOMAIN}
          clientId={process.env.REACT_APP_CLIENT_ID}
          redirectUri={window.location.origin}
        >
          <Provider store={store}>
              <Navbar products={products} setFilteredProducts={setFilteredProducts} />
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/" render={() => <Home filteredProducts={filteredProducts} />} />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/admin" render={() => <Admin filteredProducts={filteredProducts} />} />
          </Provider>
        </Auth0Provider>
      </div>
    </Router>
  );
}

export default App;
