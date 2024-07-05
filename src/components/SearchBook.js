import React from 'react'
import BookCard from './BookCard';

const SearchBook = (props) => {
    
    // const data = props;
    console.log(props);

  return (
    <div>
        {
        props!=null?
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '40px' }}>

            {/* {data.map((book) => (
                <BookCard key={book.id} name={book.name} author={book.author} />
            ))} */}

        </div>
        </>
        :
        ""
        }
    </div>
  )
}

export default SearchBook