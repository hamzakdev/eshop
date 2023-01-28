import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CartInfoContainer from '../components/CartInfoContainer'
import StripeCheckout from 'react-stripe-checkout'
import { useState } from 'react'
import { useEffect } from 'react'
import { userRequest } from '../requestMethods'
import { useNavigate } from 'react-router-dom';

const KEY = "pk_test_51MAwJxDA7RoYtOQmOkERvYEkCFA6Xwm5o7BGTwFJahvrPiMIYb9X4KJXLBEZt5rccbpildjy1tovKG8OCHARBVOa007X8ElTjP"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px;
`
const Bottom = styled.div`
    display: flex;
`
const TopButton = styled.button`
    padding: 15px;
    font-size: 20px;
    font-weight: 600;
    
    border-radius: 10px;
    border: none;
    color: #000000;
    cursor: pointer;
    transition: 0.3s ease all;
    :hover{
        transform: scale(1.1);
        background-color: #c5c5c5;
    }
`
const Left = styled.div`
flex: 3;
`

const Right = styled.div`
    flex: 1;
`
const Summary = styled.div`
border: 1px solid lightgray;
padding: 20px;
height: 50vh;
position: sticky;
top: 20vh;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=> props.type === "total" && "500"};
font-size: ${props=> props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
`
const SummaryItemPrice = styled.span`
`
const Button = styled.button`
padding: 10px;
width: 100%;
border: none;
font-weight: 900;
transition: 0.3s ease all;
cursor: pointer;
border-radius: 10px;
:hover{
    background-color: #d86266;
}
`

const Cart = () => {
    const cart = useSelector(state=> state.cart)
    const [stripeToken, setstripeToken] = useState(null)
    const navigate = useNavigate()
    const onToken = (token)=>{
        setstripeToken(token)
    }
    console.log(stripeToken)
    useEffect(()=>{
        const request = async()=>{
            try{

                const res = await userRequest.post('/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: cart.total*100
                })
                navigate('/success', {state:{data:res.data}})
            }
            catch(err){
                console.log(err)
            }
        }
       stripeToken && cart.total>1 && request();
    }, [stripeToken, cart.total, navigate])
  return (
    <Container>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Left>
                    {
                        cart.products.map(product=>(
                            
                            <CartInfoContainer product={product} key={product._id} />
                        ))
                    }
                </Left>
                <Right>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>Rs 50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>Rs 10</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total"   >
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>Rs {cart.total+50-10}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                        name='E-Shop'
                        image='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.15752-9/272283580_263866659193024_918263965374295594_n.png?stp=dst-png_p1080x2048&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=0vTBFEI3Z34AX9BQ3BC&tn=m5LxDZyH6O_97zTV&_nc_ht=scontent.fkhi2-2.fna&oh=03_AdQXneR7rsMDIyfaNGTi1mzvLMpYpsOV8IZGVbcnViQFTw&oe=638DB04A'
                        billingAddress
                        shippingAddress
                        description={`your total is ${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                        >
                        <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Right>
            </Bottom>
        </Wrapper>
    </Container>

  )
}

export default Cart