import React from 'react'
import {Button} from 'antd'
import { useDispatch } from 'react-redux'

function Item({item}) {
  const dispatch= useDispatch()
  function addTocart()
  {
     dispatch({type:'addToCart',payload:{...item,quantity:1}})
  }
  return (
    <div className='item'>
       
        <img src={item.image} alt="" height='150' width='150'/>
        <h4 className='name'>{item.name}</h4>
        <h4 className='price'><b>Rs. </b>{item.price}</h4>

        <div className="d-flex justify-content-end">
            <Button onClick={()=>addTocart()}>Add To Cart</Button>
        </div>
    </div>
  )
}

export default Item