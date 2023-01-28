import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;  
    background-color: #000000;
    /* position: fixed;
   bottom: 0; */
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column  ;
    padding: 20px;


    `;
    const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
   
  `;
  const LogoText = styled.h1`
    font-weight: 700;
    color: #d86266 ;
    font-size: 3    rem;
  `;
  const LogoImg = styled.img`
    height: 80px;
    aspect-ratio: 1;
  `;
  const Desc = styled.div`
  word-wrap: break-word;
  margin: 20px 0;
  color: white;
    
  `;
  const SocialContainer = styled.h2`
    display: flex;
  `;
  const SocialIcon   = styled.h2`
    margin-right: 10px;
    background-color: white;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
const Center = styled.div`
    flex: 1;
    
    
    `
const Right = styled.div`
    flex: 1 ;
    
`

const Footer = () => {
  return (
    <Container >
        <Left>
        <LogoContainer>
        <LogoText>E-Shop</LogoText>
        <LogoImg src='logo.png' />
        </LogoContainer>
        <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eos at temporibus illum officia, nemo libero ea soluta reprehenderit quia doloribus neque architecto voluptate consectetur ducimus! Unde maxime iure delectus?</Desc>
        <SocialContainer>
            <SocialIcon>
                <Facebook  color='primary'/>
            </SocialIcon>
            <SocialIcon>
                <Instagram  color='secondary'/>
            </SocialIcon>
            <SocialIcon>
                <Twitter  color='primary'/>
            </SocialIcon>
        </SocialContainer>

        </Left>
        <Center></Center>
        <Right></Right>

    </Container>
  )
}

export default Footer