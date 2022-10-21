import React from 'react';

//JSF Code

function App() {
  //  return (
  //   <div className="App">
  //       <h1>React First App</h1>
  //       <Some/>
  //   </div>
  // );
  return React.createElement('div' ,{clssName :'App'}, React.createElement( 'div' , null, 'React Library used'), <Some/> );
 
}

function Some() {
  // return(
  //   <h1>Another Component React Project</h1>
  // );
  return React.createElement( 'h1' , null, 'Another React Component in This project !!!');
}

export default App;
