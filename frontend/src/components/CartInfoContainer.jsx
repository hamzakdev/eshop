import React from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
display: flex;
border-bottom: 1px solid lightgray;
align-items: center;
margin-bottom: 2em;
padding: 10px;
`
const InfoLeft = styled.div`
    flex: 0.5;
    
    `
const Image = styled.img`
    width: 15em;
    aspect-ratio: 1;
    margin-right: 2em;
    `
const InfoCenter = styled.div`
display: flex;
flex: 2.5;
flex-direction: column;
justify-content: space-between;
    
`
const Product = styled.span`
    margin-bottom: 20px;
    `
const Color = styled.div`
    background-color: ${props=>props.color};
    width: 20px;
    margin-bottom: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
    `
const Size = styled.span`
margin-bottom: 20px;
    
`
const InfoRight = styled.div`
flex: 1;
display: flex;  
flex-direction: column;
align-items: center;
`
const QuantityContainer = styled.div`
flex: 1;
margin-bottom: 10px;
`
const Add = styled.span`
flex: 1;
font-weight: 500;
font-size: 2em;
`
const Quantity = styled.span`
font-size: 2em;
font-weight: 500;
flex: 1;
`
const Remove = styled.span`
font-size: 2em;
flex: 1;
font-weight: 500;
`
const Amount = styled.span`
font-size: 3.2em;
flex: 1;
font-weight: 100;
`

const CartInfoContainer = ({product}) => {
  return (
    <InfoContainer>
    <InfoLeft><Image src={product.img} /></InfoLeft>
    <InfoCenter>
        <Product><b>PRODUCT: </b>{product.title}</Product>
        <Color color={product.color}></Color>
        <Size><b>SIZE: </b>{product.size}</Size>
    </InfoCenter>
    <InfoRight>
        <QuantityContainer>
            <Add>+</Add>
            <Quantity> {product.quantity} </Quantity>
            <Remove>-</Remove>
            </QuantityContainer>
            <Amount>Rs {product.price*product.quantity}</Amount>
    </InfoRight>
</InfoContainer>
  )
}

export default CartInfoContainer