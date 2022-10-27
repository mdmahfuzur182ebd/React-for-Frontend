import React, { Component } from 'react';
import Book from './components/Book';



class App extends Component{


   state = {
    books : [
      { bookname:"1984", writer :"George Orwell"},
      { bookname:"The De Vinci code", writer :"Dan Brown"},
      { bookname:"The Alchemist", writer :"Paulo Coelho"},
    ],
    otherBook: "I am some other  Props"

   };

   changeBookastate = () => {
     // console.log('Button Click!!');
     //this.state.books[0].bookname = '1993'; worng 
     this.setState({
          books : [
          { bookname:"Nineteen Eighty Four", writer :"George Orwell"},
          { bookname:"The De Vinci code", writer :"Dan Brown"},
          { bookname:"Metmorphosis", writer :"Franz Kafka"},
        ],
     });

   }


   render() {
     console.log(this.state);
   return (
      <div className="App">
          <h1>Book list</h1>  
          <button onClick={this.changeBookastate}>Change State</button> 
          <Book bookname={this.state.books[0].bookname} writer ={this.state.books[0].writer} />

          <Book bookname={this.state.books[1].bookname} writer ={this.state.books[1].writer} />

          <Book bookname={this.state.books[2].bookname} writer ={this.state.books[2].writer} />
      </div>
    );
  }
}

export default App;
