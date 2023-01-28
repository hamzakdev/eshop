import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems} from "../data"

const Container = styled.div`
width: 100%;
margin-top: 1rem;
height : 100vh;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    aspect-ratio: 1;
    border: 1px solid gray;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    right: 10px
`;
const Wrapper=  styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw); 
    transition  : 1s ease all ;

`;
const Slide = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 100vh;

`;
const ImageContainer = styled.div`
flex: 1;
height: 100%;

`;
const Image = styled.img`
height: 80%;

`
const SlideTextContainer = styled.div`
flex: 1;
padding: 50px;
width: 100vw;
display: flex; 
 flex-direction: column;
align-items: center;

`;
const Text = styled.h1`
font-size: 4rem;
text-align: center;
`
const Desc = styled.h2`
font-size: 1.7rem;
margin-top : 20px ;
text-align: center;
`
const Button = styled.button`
font-size: 1.7rem;
/* background-color: transparent; */
margin-top : 30px ;
padding: 5px;

`

    
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = () =>{
       
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
       
    
    }
  return (
    <Container>

<Wrapper slideIndex={slideIndex}>
    {sliderItems.map((item)=>(
        <Slide key={item.id}>
    <ImageContainer>
        <Image src={item.img} />
    </ImageContainer>
    <SlideTextContainer>
        <Text>{item.title}</Text>
        <Desc>{item.desc}</Desc>
        <Button>Explore Now</Button>
    </SlideTextContainer>

</Slide>
    ))}

</Wrapper>
<Arrow  onClick={()=>handleClick("right")}>
    <ArrowForwardIosOutlinedIcon />

</Arrow>

    </Container> 
    
    )
}

export default Slider