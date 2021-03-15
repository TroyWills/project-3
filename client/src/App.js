// import logo from './logo.svg';
// import { Elements } from 'react-stripe-elements'
import "./App.css";
import Navbar from "./components/Navbar";
import { Auth0Provider } from "@auth0/auth0-react";
import Cart from "./pages/shopping-cart/cart"
import Home from "./pages/Home/home";
import Admin from "./pages/admin"
import { Provider } from "react-redux";
import { store } from "./utils/redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
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
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/admin" component={Admin} />
          </Provider>
        </Auth0Provider>
      </div>
    </Router>
  );
}

export default App;