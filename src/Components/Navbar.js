import React from 'react'
import styled from 'styled-components'
import {  Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Container = styled.div`
     height :60px;
     background-color: #fff;  
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between
`
const Left = styled.div`
   flex:1;
   display:flex;
   justify-content:flex-start;
   
`
const Center = styled.div`
   flex:1;
   text-align:center;
`
const Right = styled.div`
 flex:1;
 display:flex;
 align-items:center;
 justify-content:flex-end;
 
`
const Language = styled.div`
  font-size:14px;
  cursor:pointer;
`
const SearchContainer = styled.span`
  border: 1px solid lightgray;
  display:flex;
  
`
const Input = styled.input`
  border:none;
  padding:5px;
`
const Logo = styled.h1`
font-size:30px;
font-family: 'Shrikhand', cursive;
`
const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px
`
const Navbar = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Left><Logo>Clothe.</Logo>
                    </Left>
                    <Center>
                        <Link style={{textDecoration:"none" ,color:"inherit" ,margin:5}}  to="/">Home</Link>
                        <Link style={{textDecoration:"none" ,color:"inherit" ,margin:5}} to="/productlist">Shop</Link>
                    </Center>
                    <Right>
                        <MenuItem><Link style={{textDecoration:"none" ,color:"inherit" ,margin:2}} to="/register">REGISTER</Link></MenuItem>
                        <MenuItem><Link style={{textDecoration:"none" ,color:"inherit" ,margin:2}} to="/login">SIGN IN</Link> </MenuItem>
                        <MenuItem>
                            <Link style={{textDecoration:"none" ,color:"inherit" ,margin:2}} to="/cart">
                            <Badge color="secondary" badgeContent={4}>
                            <ShoppingCartOutlined/>
                            </Badge>
                            </Link>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default Navbar