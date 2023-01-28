import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import {popularProducts } from '../data'
import axios from 'axios'
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`

const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])

  useEffect(() => {
    const getProducts =async()=>{
        try {
              const res = await axios.get( cat ?`http://localhost:5000/api/product?category=${cat}`:"http://localhost:5000/api/product" ) 
              setProducts(res.data)
       } catch (error) {}   
    }
    getProducts()
  }, [cat])

  useEffect(()=>{
      cat && setfilteredProducts(
        products.filter(item=>Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
        ))
      )
  },[products, cat, filters])
  console.log(filteredProducts)
  return (
    <div>
        <h1 style={{textAlign: "center", marginTop: '10px'}}>NEW ARRIVALS</h1>
   <Container>
    {cat ?filteredProducts.map((item)=>(
        <Product item={item} key={item.id} />
        )):
        products.slice(0,8).map((item)=>(
          <Product item={item} key={item.id} />
          ))
        }
   </Container>
        </div>
  )
}

export default Products