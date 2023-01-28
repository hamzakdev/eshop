import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
    height: 70vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const SUCCESS = styled.h1`
font-size: 2em;
font-weight: 200;
color: red;
`
const Success = () => {

    const location  = useLocation()
    console.log(location)
  return (

<Container>
    <SUCCESS>
    Payment Successful. Thanks for ordering 
    </SUCCESS>
</Container>
  )
}

export default Success