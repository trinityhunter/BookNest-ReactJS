import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import BookCard from './BookCard';

const ViewBook = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/getBooks')
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

    const handleDelete = async (id) => {
        try {
          axios.delete(`http://localhost:8080/${id}`)
        } catch (error) {
          console.error('Error deleting record:', error);
        }
      };
    

  return (
    <div>
        {
        data!=null?
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '40px' }}>

            {data.map((book) => (
                <BookCard key={book.id} record={book}
                onDelete={handleDelete} />
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