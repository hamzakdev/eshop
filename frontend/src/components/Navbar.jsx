
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';  
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Container = styled.div`
height: 60px;
position: sticky;
top: 0;
z-index: 999;
background-color: white;
height: 82px;


`;
const Wrapper = styled.div`
border-bottom: 0.5px solid lightgray;
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between; 
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
  font-size: 14;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
  display: flex;;
  align-items: center;

`
const SearchInput = styled.input`
   border: none;
   :focus{
    outline: none;
   }
`;


const Center = styled.div`
flex: 1;
display: flex;
justify-content: center ;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  transition: 0.5s ease all;
  cursor: pointer;
  :hover{
    transform: scale(1.5); 
    transition: 0.5s ease all;
  }
`;
const LogoText = styled.h1`
  font-weight: 700;
  color: #d86266 ;
`;
const LogoImg = styled.img`
  height: 50px;
  aspect-ratio: 1;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: space-around;
border: 4px solid lightgray;
padding: 7px;

`;
const MenuItem = styled.div`
font-size: 14;
cursor: pointer;
margin-right: 25px;
padding: 10px;
transition: 0.3s ease all;
border-radius: 10px;
:hover{
  background-color: #d86266;
  color: white;
  transition: 0.3s ease all;
  
}
`
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const {currentUser} = useSelector(state=>state.user)
  
  return (
    <Container><Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <SearchInput placeholder='Search here' />
          <SearchIcon style={{cursor: "pointer"}} />
        </SearchContainer>  
        </Left>
      <Center>
        <Link to="/" className='link'>
        <LogoContainer>
        <LogoText>E-Shop</LogoText>
        <LogoImg src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.15752-9/272283580_263866659193024_918263965374295594_n.png?stp=dst-png_p1080x2048&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=0vTBFEI3Z34AX9BQ3BC&tn=m5LxDZyH6O_97zTV&_nc_ht=scontent.fkhi2-2.fna&oh=03_AdQXneR7rsMDIyfaNGTi1mzvLMpYpsOV8IZGVbcnViQFTw&oe=638DB04A' />
        </LogoContainer>
        </Link>
      </Center>
      <Right>
       <Link to="/register" className='link'> <MenuItem>Register</MenuItem> </Link>
       <Link to={currentUser ? "/" : "/login"} className='link'> <MenuItem>Login</MenuItem> </Link>
        <Badge badgeContent={quantity} color="success">
          <Link to="/cart" className="link">
        <ShoppingCartOutlinedIcon />
          </Link>
        </Badge>
        </Right>
      </Wrapper></Container>
  )
}

export default Navbar