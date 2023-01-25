import "./Filter.css"
import { useSort } from "../../context";


const Filter = () => {


const { dispatchSort } = useSort()
    

return <><div className="fillter-component">

             
    <div>
        <button className="clear-btn" onClick={() => dispatchSort({ type: "CLEAR-FILTER" })}>Clear All</button>
    </div>


    <div className="sort-button">
        <h3 className="heading">Sort by Price </h3>

            <select name="Sort " id="price-sort" onChange={(e) => dispatchSort({ type: "Sortby", payload: e.target.value })} >
                    
            <option id="option" checked value="Default">Default</option>
            <option id="option"  value="Low-to-High">Low to High</option>
            <option id="option"  value="High-to-Low">High to Low</option>
            </select>

    </div>

    {/* Category filter */}

    <div className="discount-div">
        <h3 className="heading">Category</h3>

        <div className="disc-input">

            <input type="radio" name="categoryName" id="friction"
            onChange={()=>dispatchSort({type:"Category" , payload : "Friction-Book" })} />
            <label htmlFor="friction">Friction</label>

        </div>
        <div className="disc-input">

            <input type="radio" name="categoryName" id="non-friction"
            onChange={()=>dispatchSort({type : "Category" , payload : "Non-Friction-Book"})}/>
            <label htmlFor="non-friction">Non-Friction</label>

        </div>
         <div className="disc-input">

            <input type="radio" name="categoryName" id="horror"
            onChange={()=>dispatchSort({type : "Category" , payload : "Horror"})}/>
            <label htmlFor="horror">Horror</label>

        </div>
    </div>

    {/* discount */}
    
    <div className="discount-div">
            <h3 className="heading">Discount</h3>
        <div className="disc-input">
                 <input type="radio" name="discount" id="10" 
                 onChange={()=>dispatchSort({type : "Discount" , payload : "10%"})}/>
                 <label htmlFor="10">10% and Above</label>
        </div>
        <div className="disc-input">
                 <input type="radio" name="discount" id="20"
                 onChange={()=>dispatchSort({type : "Discount" , payload : "20%"})}/>
                 <label htmlFor="20">20% and Above</label>
        </div>
        <div className="disc-input">
                 <input type="radio" name="discount" id="30"
                 onChange={()=>dispatchSort({type : "Discount" , payload : "30%"})}/>
                 <label htmlFor="30">30% and Above</label>
        </div>
        <div className="disc-input">
                 <input type="radio" name="discount" id="40"
                 onChange={()=>dispatchSort({type : "Discount" , payload : "40%"})}/>
                 <label htmlFor="40">40% and Above</label>
        </div>
        <div className="disc-input">
                 <input type="radio" name="discount" id="50"
                 onChange={()=>dispatchSort({type : "Discount" , payload : "50%"})}/>
                 <label htmlFor="50">50% and Above</label>
        </div>
    </div>
    
</div>
</>
}

export { Filter };