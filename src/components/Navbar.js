import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import BookCard from './BookCard';
import { useLocation } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = () => {

  const [id, setid] = useState(0)

  const navigate = useNavigate();

  const [data, setdata] = useState()

  const [flag, setflag] = useState(false)

  const location = useLocation();

  console.log(location.pathname);

  const handleSearch = () => {


    if(id === 0){
      alert("Enter valid ID");
      return;
    }

    axios.get(`http://localhost:8080/${id}`)
    .then(function (response) {
      // handle success
      setdata(response.data)
      setflag(true)

      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

    navigate("/searchBook")

  }

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Book Nest
        </Typography>
            <Search style={{border: "1px solid black", maxWidth: "300px"}}>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search by ID..."
                onChange={(e)=> setid(e.target.value)}
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Button variant="contained" color="primary" type="submit" style={{color: "white", border: "1px solid black", textDecoration: 'none', margin: "5px"}} onClick={handleSearch}>
                Search
            </Button>
        <Button variant="contained" color="primary" type="submit" style={{color: "white", border: "1px solid black", textDecoration: 'none', margin: "5px"}}>
          <NavLink to={"/"}>Add Books</NavLink>
        </Button>
        <Button variant="contained" color="primary" type="submit" style={{border: "1px solid black", textDecoration: 'none',  margin: "5px"}}>
          <NavLink to={"/viewBooks"}>View Books</NavLink>
        </Button>
      </Toolbar>
    </AppBar>
    {
      location.pathname === "/searchBook" && flag === true?
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '40px' }}>
        <BookCard key={data.id} name={data.name} author={data.author}/>

      </div>
      :
        
        ""
        
    }
    </>
  );
};

export default Navbar;
