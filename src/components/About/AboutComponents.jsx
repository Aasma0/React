import React from 'react'
import CardComponent from '../card/CardComponent'

const AboutComponents = () => {
    const ProductData = [{
    imgUrl:"https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8fDA%3D",
    title:"About",
    description:"Building"
},
{
    imgUrl:"https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFyaXN8ZW58MHx8MHx8fDA%3D",
    title:"About",
    description:"Building"
},

{
    imgUrl:"https://images.unsplash.com/photo-1495442358998-961b69f45703?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFyaXN8ZW58MHx8MHx8fDA%3D",
    title:"About",
    description:"MouBuildingntain"
}]
  return (
    <div>
        <CardComponent data={ProductData}/>
     </div>
  )
}

 

export default AboutComponents
