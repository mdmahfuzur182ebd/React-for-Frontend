import React, { Component } from 'react';
import Book from './components/Book';



class App extends Component{
  //state
  //16.8

   state = {
    books : [
      { bookname:"1984", writer :"George Orwell"},
      { bookname:"The De Vinci code", writer :"Dan Brown"},
      { bookname:"The Alchemist", writer :"Paulo Coelho"},
    ],
    otherBook: "I am some other  Props"
    
   };

  //  constructor() {
  //     super();
  //     this.state = {}; 
  //   }

   render() {
   return (
      <div className="App">
          <h1>Book list</h1>   
          <Book bookname={this.state.books[0].bookname} writer ={this.state.books[0].writer} />
          <Book bookname={this.state.books[1].bookname} writer ={this.state.books[1].writer} />
          <Book bookname={this.state.books[2].bookname} writer ={this.state.books[2].writer} />
      </div>
    );
  }
}

export default App;
