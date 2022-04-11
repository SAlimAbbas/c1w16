import React from "react"
import data from '../data.json'
import GroceryItem from './GroceryItem';
import styles from "./Grocerydetails.module.css";
import CartButton from "./CartButton";
 
const headingStyle={
    border :"1px solid grey",
    borderRadius:"15px",
    color:"#ff5dbd",

}

const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1 style={headingStyle}>Groceries</h1>
        <h2 style={{textAlign:"left"}}>Top Deals</h2>
        <div className={styles.container}>
            {/* map through the data and display the cards */}
            {data.map((elm)=>{
               const {id,title,imgURL,mrp,sellingPrice}=elm
               return(
                 <div style={{border:"0.5px solid grey",borderRadius:"15px",paddingTop:"15px"}} key={id}>
                   <img src={imgURL} alt="" />
                   <h4>{title}</h4>
                   <div style={{display:"flex",justifyContent:"center"}}>
                     <h2>{sellingPrice}</h2>
                     <p style={{textDecoration:"line-through",margin:"25px 18px"}}>M.R.P:{mrp}</p>
                   </div>
                   <div>
                    <button className={styles.btn} onClick={()=>{<CartButton/>}}>Add to Cart</button>
                    <CartButton/>
                   </div>
               </div>
               ) 
            })
            }
        </div>

       
        </>
    )
}
export default GroceryDetails