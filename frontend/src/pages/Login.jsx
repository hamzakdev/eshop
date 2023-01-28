import { CircularProgress } from '@mui/material'
import React, { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { login } from '../redux/apiCalls'

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
    align-items: center;
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

const Login = ({history}) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {isFetching, error} = useSelector((state)=> state.user)  

    const handleClick = (e)=>{
        e.preventDefault()
        login(dispatch, {email: email, password: password})
        navigate('/')

    }

  return (
    <>
   <Container>
    <Wrapper>

    <Title>LOGIN</Title>
    <Form onSubmit={handleClick}>
        <Input onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
        <Input onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
        <Button disabled={isFetching} type='submit'>{isFetching ? <CircularProgress /> :  "Login"}</Button>
        {error && <span style={{color: 'red'}}>ERROR OCCURED</span>}
    </Form>
    </Wrapper>
   </Container>
    </>
  )
}

export default Login