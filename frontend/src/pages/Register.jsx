import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column  ;
`
const Title = styled.h1`
    
`
const Form = styled.form`
    display: flex;
    margin: 1rem;
    flex-direction: column;
    `
const Input = styled.input`
    
    margin: 2px;
`
const Button = styled.button`
    
`

const Register = () => {
  return (
    <>
   <Container>
    <Wrapper>

    <Title>REGISTER NOW</Title>
    <Form>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
        <Button>Register</Button>
    </Form>
    </Wrapper>
   </Container>
    </>
  )
}

export default Register