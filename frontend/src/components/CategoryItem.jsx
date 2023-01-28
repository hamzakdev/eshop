import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
    flex: 1;
    margin: 10px;  
    position: relative;
`   
const Info = styled.div`
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    `
const Image = styled.img`
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    `   
const Title = styled.h1`
color: white;
margin-bottom: 20px;
    
`
const Button = styled.button`
    border: none;
    padding: 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: 0.3s ease all;
    :hover{
        color: black;
        background-color: white;
        transition: 0.3s ease all;
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
        <Title>{item.title}</Title>
        <Link to={`products/${item.categ}`}>
        <Button>SHOW MORE</Button>
        </Link>
        </Info>
    </Container>
  )
}

export default CategoryItem