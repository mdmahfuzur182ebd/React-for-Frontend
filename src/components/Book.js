import React from 'react';



const Book = props => {
  return (
    <div>
        <h3  onClick={props.change}>Book: {props.bookname}</h3>
        <h5>Writer: {props.writer}</h5>
    </div>
  )
}

export default Book;