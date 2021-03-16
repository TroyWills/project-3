// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/Home/home';
import { Auth0Provider } from "@auth0/auth0-react";
import Cart from "./pages/shopping-cart/cart"
import Home from "./pages/Home/home";
import Admin from "./pages/admin"
import { Provider } from "react-redux";
import { store } from "./utils/redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <div>
      <Navbar/>
      <Home />
      {/* insert wrappers inside of Auth0Provider */}
      <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN}
        clientId={process.env.REACT_APP_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <Navbar products={products} setFilteredProducts={setFilteredProducts}/>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" render={() => <Home filteredProducts={filteredProducts}/>} />
          <Route exact path= "/cart" component={Cart} />
          <Route exact path= "/admin" component={Admin} />

        </Provider>
      </Auth0Provider>
    </div>
  );
}

export default App;
