import React, { Component } from 'react';
import Person from './components/Person';



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
          <h1>This is Random Number</h1>
          <Person name="Karim" age="23"/>
          <Person name="Leon" age="33"/>
          <Person name="Rahim" age="24"/>
          <Person name="Rahman" age="26"/>
          
      </div>
    );
  }
}

export default App;
