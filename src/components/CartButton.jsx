import { useState } from "react";



// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const[count,setCount]=useState(0);
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div style={{display:"flex",height:"20px",justifyContent:"center"}}>
      <button onClick={()=>{setCount(count-1)}}>-</button>
      {count>0?<p className="count-item">{count}</p>:0}
      <button onClick={()=>{setCount(count+1)}}>+</button>
  </div>

  </>
}
export default CartButton
