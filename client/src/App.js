// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import { Auth0Provider } from "@auth0/auth0-react";
import Cart from "./pages/cart"
import Home from "./pages/Home/home";
import { Provider } from "react-redux";
import { store } from "./utils/redux/store";
require('dotenv').config();


function App() {
  return (
    <div>
      {/* insert wrappers inside of Auth0Provider */}
      <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN}
        clientId={process.env.REACT_APP_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <Navbar />
          <Home />
              <Cart/>
        </Provider>
      </Auth0Provider>
    </div>
  );
}

export default App;