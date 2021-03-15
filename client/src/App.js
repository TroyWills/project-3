// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from './components/Footer';
import Cart from "./pages/cart"
import Home from "./pages/Home/home";
import { Provider } from "react-redux";
import { store } from "./utils/redux/store";

function App() {
  return (
    <div>
      {/* insert wrappers inside of Auth0Provider */}
      <Auth0Provider
        domain={process.env.DOMAIN}
        clientId={process.env.CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <Navbar />
          <Home />
          <Cart />
          <footer />
          <LoginButton />
        </Provider>
      </Auth0Provider>
    </div>
  );
}

export default App;