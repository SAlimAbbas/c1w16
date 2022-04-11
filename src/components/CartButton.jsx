import { useState } from "react";
import styles from "./Grocerydetails.module.css"



// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const[count,setCount]=useState(0);

    const handleIncrement=(value)=>{

      setCount(count+value);
    }
    const handleDecrement=(value)=>{
      {count>0
      ? setCount(count-value)
      : setCount(0)
      }
    }



  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
{count===0
  ?<button className={styles.btn} onClick={()=>{<CartButton/>}}>Add to Cart</button>
  :<p className="count-item">{count}</p>
}


  <div style={{display:"flex",height:"20px",justifyContent:"center"}}>
      <button onClick={()=>handleDecrement(1)}>-</button>
      <button onClick={()=>handleIncrement(1)}>+</button>
  </div>

  </>
}
export default CartButton
