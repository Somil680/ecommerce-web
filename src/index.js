import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom"
import { CartProvider, StoreProvider } from "./context";
import { SortProvider } from "./context/SortContext/Sortcontext";
import { WishlistProvider } from "./context";
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById("root")
);



