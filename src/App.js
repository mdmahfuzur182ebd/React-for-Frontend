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

   changeBookastate = (newbook) => {
     // console.log('Button Click!!');
     //this.state.books[0].bookname = '1993'; worng 
     this.setState({
          books : [
          { bookname:newbook, writer :"George Orwell"},
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
          <button onClick={this.changeBookastate.bind(this, "Nineteen Eighty Four")}>Change State</button> 
          <Book bookname={this.state.books[0].bookname} writer ={this.state.books[0].writer} />

          <Book bookname={this.state.books[1].bookname} writer ={this.state.books[1].writer} />

          <Book bookname={this.state.books[2].bookname} writer ={this.state.books[2].writer} 
          change = {this.changeBookastate.bind(this, "Nineteen 85")}
          />
      </div>
    );
  }
}

export default App;
