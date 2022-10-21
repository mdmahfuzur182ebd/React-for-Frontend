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
          <h1>React First App</h1>
          <Person/>
      </div>
    );
  }
}

export default App;
