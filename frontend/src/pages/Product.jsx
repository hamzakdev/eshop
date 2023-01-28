import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';
import { publicRequest } from '../requestMethods';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
    `;
const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: contain;
    `;
const InfoContainer = styled.div`
flex: 1;
    padding: 0px 50px;
    border: 1px solid gray;
`;
const Title = styled.h1`
    font-weight: 200    ;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FilterContainer = styled.div`
display: flex;
`



const Filter = styled.div`
    margin: 0px 20px;
    display: flex;
    align-items:center;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 4px;
    cursor: pointer;
   
`
const FilterSize = styled.select`
padding:10px;
margin-left: 10px;
`
const FilterOption = styled.option``
const AddContainer = styled.div`
    display: flex;
    width: 45%;
    justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
`
const Amount = styled.span`
    width: 30px;
    aspect-ratio: 1;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    padding: 20px;
    border: 2px solid black;
    background-color: transparent;
    margin: 30px;

`
const Product = () => { 
    const location = useLocation()
    const id = location.pathname.split('/')[2];

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")

    useEffect(() => {
        const getProduct = async()=>{
            try {
                    const res = await publicRequest.get('/product/find/'+id)
                    setProduct(res.data)
            } catch (error) {
                
            }
            
        }
        getProduct()
    }, [id])
    const handleQuantity = (type)=>{
        if(type ==="dec"){
          quantity>1 &&  setQuantity(quantity -1)
        }
       else if(type ==="inc"){
            setQuantity(quantity +1)
        }
    }
const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(addProduct({...product, quantity, color, size }))
        
    }
  return (
    <Container>
        <Wrapper>   
            <ImgContainer>
            <Image src={product.img}  />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
            <Price>{`Rs ${product.price}`}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterText>Color</FilterText>
                        {product.color?.map((c)=>(
                        <FilterColor color={c} key={c} onClick={()=>setColor(c)} />
                        ))}
                        
                    </Filter>
                    <Filter>
                        <FilterText>Size</FilterText>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map((s)=>(
                                <FilterOption key={s}>{s}</FilterOption >
                                
                            ))}
                      
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity('dec')} style={{margin:'0px 5px', cursor:'pointer'}} />
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity('inc')} style={{margin:'0px 5px', cursor:'pointer'}}  /> 
                    </AmountContainer>
                    <Button onClick={handleClick}>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Product