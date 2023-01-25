import "./productlist.css"
import React from "react";
import { CartVeiw } from "./cardVeiw";
import { Navbar } from "../../component";
import { Filter } from "../../component/Filtter/Filter"
import { useStore } from "../../context";
import { getsortdata } from "../../utensiles/getsort";
import { useSort } from "../../context";
import { categoryFilter } from "../../utensiles/Categoryfilter";
import { discountFilter } from "../../utensiles/Discountfilter";


function Productlist() {

  const { state } = useSort()
  const { storeState } = useStore()
  const defaultdata = [...storeState.storeItem]
  const sorteddata = getsortdata([...defaultdata], state.sortby)
  const categorydata = categoryFilter([...sorteddata], state.Categoryfilter)
  const discountdata = discountFilter([...categorydata], state.Discountfilter)

  console.log(discountdata)
  


  return <div>
    <Navbar />
    <Filter />
       <div className="product-grid">
  {
      discountdata.map((item) => <CartVeiw products = {item}/>  )
    }

</div>
</div>
}
export {Productlist }