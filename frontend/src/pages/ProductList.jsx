import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Container = styled.div`
`
const Title = styled.h1`
margin: 30px;
margin-top: 50px;
        
`
const FilterContainer = styled.div`
        display: flex;
        justify-content: space-between;
`
const Filter = styled.div`
        margin: 20px;
`;
const FilterText = styled.span`
        font-size: 20px;
        font-weight: 600;
`
const Select = styled.select`
        padding: 4px;
        margin-left: 10px;
`
const Option = styled.option`

`

const ProductList = () => {
        const location = useLocation()
        const cat = location.pathname.split('/')[2]
        const [filters, setFilters] = useState({})
        const [sort, setSort] = useState("newest")
        console.log(filters)
        console.log(sort)

  return (
   <Container> 
    <Title>{cat}</Title>
    <FilterContainer>
        <Filter>
        <FilterText>Filter:</FilterText>
        <Select onChange={(e)=>setFilters({color: e.target.value})}>
                <Option disabled selected>color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
        </Select>       
        </Filter>
        <Filter onChange={e=>setSort(e.target.value)}>
        <FilterText>Sort:</FilterText>
        <Select         >
                <Option value="newest" >Newest</Option>
                <Option value="hightolow" >Price High to Low</Option>
                <Option value="lowtohigh" >Price Low to High</Option>
        </Select>
        </Filter>
    </FilterContainer>
    <Products cat={cat} filters={filters} sort={sort} />
     </Container>

  )
}

export default ProductList