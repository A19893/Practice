import React from 'react'
import Mobile from './Mobile'
import Shirt from './Shirt'
import Watch from './Watch'
const Home = (props) => {
  return (
    <>
    {console.log(props.data)}
    <Mobile input={props.data}/>
    <Shirt input={props.data}/>
    <Watch input={props.data}/>
    </>
  )
}

export default Home