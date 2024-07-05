import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import BookCard from './BookCard';



const ViewBook = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://booknest-springboot-production.up.railway.app/getBooks')
        .then(function (response) {
            setData(response.data)
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }, [setData])
    

  return (
    <div>
        {
        data!=null?
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '40px' }}>

            {data.map((book) => (
                <BookCard key={book.id} name={book.name} author={book.author} />
            ))}

        </div>
        </>
        :
        ""
        }
    </div>
  )
}

export default ViewBook