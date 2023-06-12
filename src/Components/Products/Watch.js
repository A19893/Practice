import React from 'react'
import Data from '../Data/Product.json'
const Watch = (props) => {
  const FilteredData=Data.watch.filter((item)=>{
    if(item.input===" "){
      return item;
    }
    else{
      return item.ProdName.toLowerCase().includes(props.input);
    }
  })
  return (
    <>
    {
        FilteredData.map((item)=>{
           return(
           <>
           <ul>
               <li>{item.ProdBrand}</li>
               <li>{item.ProdName}</li>
               <li>{item.ProdDesc}</li>
               <img src={item.ProdImg} alt="" height="50px" width="50px"/>
           </ul>
           </>
           )
        })
       }
       </>
  )
}

export default Watch
//conditional rendering 
//event handeling