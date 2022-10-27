import React, { Component } from 'react';
import Book from './components/Book';



//JSF Code
//Functional Component
// function App() {
//    return (
//     <div className="App">
//         <h1>React First App</h1>
//         <Person/>
//     </div>
//   );

// }


//Class Component

class App extends Component{
  render() {
   return (
      <div className="App">
      <h1>Book list</h1>   
      <Book bookname="1984" writer ="George Orwell"/>
      <Book bookname="The De Vinci code " writer ="Dan Brown"/>
      <Book name="The Alchemist" writer ="Paulo Coelho"/>
      </div>
    );
  }
}

export default App;
