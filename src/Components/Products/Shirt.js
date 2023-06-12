import React from 'react'
import Data from '../Data/Product.json'
const Shirt = (props) => {
  const FilteredData=Data.shirt.filter((item)=>{
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
        <div id="div">
            <div id="name">
            <li>{item.ProdBrand}</li>
            <li>{item.ProdName}</li>
            </div>
            <div id="desc">            
              <li>{item.ProdDesc}</li>
            </div>
            <div id="img">
              <img src={item.ProdImg} alt=""  height="50px" width="50px"/>
              </div>
           </div>
        </>
        )
     })
    }
    </>
  )
}

export default Shirt