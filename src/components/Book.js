import React from 'react';
import '../stylesheets/Book.css';



const Book = props => {
  return (
    <div className='Book'>
        <h3  onClick={props.change}>Book: {props.bookname}</h3>
        <h5>Writer: {props.writer}</h5>
        <input type="text" onChange={props.inputName} value={props.bookname} />
    </div>
  )
}

export default Book;