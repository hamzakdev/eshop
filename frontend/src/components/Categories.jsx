import React from 'react'
import styled from 'styled-components'
import {categories} from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const Categories = () => {
  return (
<div>
<h1 style={{textAlign: 'center', marginBottom: "20px"}}>

    SHOP BY CATEGORIES
    </h1>
    <Container>
        {categories.map((item)=>(
            <CategoryItem item={item} key={item.id} />
            ))}
    </Container>
            </div>
  )
}

export default Categories