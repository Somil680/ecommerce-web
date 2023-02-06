import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom"
import { CartProvider, StoreProvider } from "./context";
import { SortProvider } from "./context/SortContext/Sortcontext";
import { WishlistProvider } from "./context";
// import { Auth0Provider } from "@auth0/auth0-react";
import { AuthProvider } from "./context/AuthContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
   {/* <Auth0Provider
    domain="dev-b18zqs0a6ov4jbgz.us.auth0.com"
    clientId="316hyZwDlReujZ2P1N2GVR4GKKFDSOGU"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    > */}
    <Router>
      <AuthProvider>
        <StoreProvider>
         <CartProvider>
           <WishlistProvider>
             <SortProvider>
              <App />
             </SortProvider>
            </WishlistProvider>
          </CartProvider>
        </StoreProvider>
        </AuthProvider>
    </Router>
      {/* </Auth0Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);



