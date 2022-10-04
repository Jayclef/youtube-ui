import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom'; 


const Container = styled.div`
positon: sticky;
top:0;
background-color:${({theme}) => theme.bgLighter};
height:56px;

`
const Wrapper = styled.div`
display:flex;	
align-items:center;
height:100%;
padding: 0px 20px;
justify-content: flex-end;
positon:relative;

`
const Search = styled.div`
width:40%;
left:0px;
right:0px;
margin: auto;
positon: absolute;
display:flex;
align-items:center;
justify-content:space-between;
padding:5px;
border: 1px solid #ccc;
border-radius:3px;
box-shadow:0 0 10px;
`
const Input = styled.input`
border:none;
background-color: transparent;
outline:none;
color:${({theme}) => theme.dick}

`


const Button = styled.button`
padding: 5px 15px;
background-color:transparent;
border:1px solid #3ae6ff;
color:#3ae6ff;
border-radius:5px;
font-weight:500;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' />
          <SearchOutlinedIcon />
        </Search>
        <Link to="signin" style={{textDecoration:"none"}}>

        <Button>
        <AccountCircleOutlinedIcon />
        SIGN IN
        </Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar