import React from 'react'
import CardComponent from '../card/CardComponent';
import LifecycleComponent from '../ReactLifeCycle/lifecycleComponent';

const ShopComponent = () => {
  const ProductData = [{
    imgUrl:"https://plus.unsplash.com/premium_photo-1700135090918-ecb43069e20b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"ShopCard",
    description:"Desert"
},
{
    imgUrl:"https://images.unsplash.com/photo-1718976142386-e9ebe34d3aee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"ShopCard",
    description:"Snow Mountain"
},

{
    imgUrl:"https://images.unsplash.com/photo-1707770581480-beefabdea1e9?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"ShopCard",
    description:"Mountain"
}]
  return (
    <div>
        <CardComponent data={ProductData}/>
        <LifecycleComponent/>
     </div>
  )
}

export default ShopComponent

