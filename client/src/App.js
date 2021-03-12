// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <div>
      {/* insert wrappers inside of Auth0Provider */}
      <Auth0Provider

    domain= {process.env.DOMAIN}
    clientId={process.env.CLIENT_ID}
    redirectUri={window.location.origin}
  >
          <Navbar/>
  </Auth0Provider>
      
    </div>
  );
}

export default App;

