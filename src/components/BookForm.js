import React, { useState } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const BookForm = () => {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(bookName==='' || author === ''){
      alert("Enter Book Name and Author");
      return;
    }
    
    axios({
        method: 'post',
        url: 'https://booknest-springboot-production.up.railway.app/addBook',
        data: {
          id: 1,
          name: bookName,
          author: author
        }
      });

    console.log('Book Name:', bookName);
    console.log('Author:', author);

    navigate("/viewBooks")
    
    setBookName('');
    setAuthor('');
  };

  return (
    <>
    <Container
      maxWidth="sm"
      style={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #E3F2FD, #FFE0B2, #F8BBD0)',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        border: '2px solid #ffffff',
        marginTop: '10vh',
        marginBottom: '10vh',
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Book Name"
              variant="outlined"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Author"
              variant="outlined"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Register Book
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </>
  );
};

export default BookForm;
