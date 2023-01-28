import { ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Info = styled.div`
opacity: 0;
display: flex;
position: absolute;
z-index: 3;
`


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;  
  justify-content: center;
  align-items: center;
  background-color: #f5f3f0;
  transition: 0.5s ease all;
  border-radius: 10%;
  border: 0.5px solid lightgray;
  

  &:hover{
    background-color: #e9ded2 ;
  }
  &:hover  ${Info}{
    opacity: 1;
    transition: 0.5s ease all;
  }
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
margin: 10px;
background-color: white  ;
border-radius: 50%;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
 cursor: pointer;
 transition: 0.3s ease all;

 &:hover{
  transform: scale(1.2);
  transition: 0.3s ease all;
 }
`

const Product = ({item}) => {
  return (


   <Container>
    <Image src={item.img} />
    <Info>
    <Link to={`/product/${item._id}`}>
      <Icon>
        <ShoppingCartOutlined />
      </Icon>
    </Link>
      <Icon>
      </Icon>
     
    </Info>
   </Container>
  )
}

export default Product