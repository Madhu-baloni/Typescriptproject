import React from 'react'


interface addtocart {
    id:string,
    title:string,
    image:string,
    price:Number,
}

const AddToCart: React.FC<addtocart> = ({id,title,image,price}) => {
  return (
    <div>AddToCart</div>
  )
}

export default AddToCart