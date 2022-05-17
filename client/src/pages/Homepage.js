import React, { useEffect, useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import axios from 'axios'
import { Row,Col } from 'antd'
import Item from '../components/Item'
import '../resources/items.css'
import { useDispatch } from 'react-redux'
function Homepage() {
  const [itemsData, setItemsData] = useState([])
  const [selectedCategory,setSelectedCategory]=useState('Beverages')
  const categories = [
   
    {
      name:'Beverages',
    },
    {
      name:'Snacks',
    },
    {
      name:'Staples'
    },
    {
      name:'Cleaning'
    },
    {
      name:'Beauty'
    }


  ]
  const dispatch=useDispatch()
  const getAllItems = () => {
dispatch({type:'showLoading'})

    axios.get('/api/items/get-all-items').then((response) => {
      dispatch({type:'hideLoading'})
      setItemsData(response.data)
    }).catch((error) => {
      dispatch({type:'hideLoading'})
      console.log(error);
    })
  }
  useEffect(() => {

    getAllItems()
  }, [])

  return (
    <DefaultLayout>
    <div className="d-flex">
      {categories.map((category)=>{
        return <div 
        onClick={()=>setSelectedCategory(category.name)}
        className={`d-flex category ${selectedCategory===category.name && 'selected-category'}`}>
          <h4>{category.name}</h4>
          
        </div>
      })}
    </div>
      <Row gutter={20}>

        {itemsData.filter((i)=>i.category===selectedCategory).map((item) => {
          return <Col xs={24} lg={6} md={12} sm={6}>
              <Item item={item}/>
          </Col>
        })}
      </Row>

    </DefaultLayout>
  )
}

export default Homepage