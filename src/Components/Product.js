import React,{useState} from 'react';
import Mobile from './Products/Mobile'
import Shirt from './Products/Shirt'
import Watch from './Products/Watch'
const Product=()=>{
    const [value,setValue]=useState(" ");
    const handleChange=(e)=>{
     setValue(e.target.value.toLowerCase());
    }
    return(
        <>
        <div id="search">
        <input type="text" placeholder="Enter Product Name" id="search"
         value ={value} onChange={(e)=>handleChange(e)}/>
         </div>
        <Mobile input={value}/>
        <Shirt input={value}/>
        <Watch input={value}/>
        </>
    )
}
export default Product;