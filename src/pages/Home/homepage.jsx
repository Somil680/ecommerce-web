import "./homepage.css"
import React from "react";
import {Link} from "react-router-dom"
import { Footer, Navbar } from "../../component";
import {  audiobook12, banner1, doglapan, gautamAdani, iAmonir, sub_banner1, sub_banner2, zakir , life, banner2 } from "../../Images";

function Home() {
  return (
    <div className="main-body">
      <Navbar />
    <div className="main">
      
      <div >
        <img src={banner1} alt=""  className="banner"/>
      </div>
      <div className="explore-container">
        <h2>Explore our most famous Author book and Bestseller books </h2>
      <button className="explore-button">
        <Link to="/productlist">Explore more</Link>
        </button>
        </div>
      
        <h1 className="topheading">Catch up on what we're reading</h1>
      <div className="sub">
        <img src={sub_banner1} alt=""  className="sub-banner" />
        <img src={sub_banner2} alt=""  className="sub-banner" />
      </div>

      <div>
        <img src={audiobook12} alt="" className="s-banner" />
      </div>

      <h1 className="topheading">BESTSELLER COLLECTION</h1>

      <div className="product-container-home ">
        
        <div className="container-home">
          <img src={doglapan} alt="" className="books" />
          <h4 className="margin0">Doglapan</h4>
          <p className="margin0">Ashneer Grower</p>
         </div>
        
        <div className="container-home">
          <img src={zakir} alt="" className="books" />
          <h4 className="margin0">Zikr</h4>
          <p className="margin0">Muzafar Ali</p>
        </div>

        <div className="container-home">
          <img src={gautamAdani} alt="" className="books" />
          <h4 className="margin0">Gautam Adani</h4>
          <p className="margin0">R.N. Bhaskar</p>
        </div>

        <div className="container-home">
          <img src={iAmonir} alt="" className="books" />
           <h4 className="margin0">I An Onir</h4>
          <p className="margin0">Irene Dhar Malik</p>

        </div>
        
        <div className="container-home">
          <img src={life} alt="" className="books" />
           <h4 className="margin0">Life Amazing Secrets</h4>
          <p className="margin0">Gaur Gopal Das</p>

        </div>

      </div>

      <div>
        <img src={banner2} alt="" className="s-banner" />
      </div>
      </div>
       
        
      <Footer/>
    </div>

  );
}
export  {Home};
