import React, { Component } from 'react';



// const Person = (props) => {
//     console.log(props);
//     return(
//       <div>
//         <h2>Name : {props.name} and  Age : {props.age} years</h2>
//         <h4>Children : {props.children}</h4>
//       </div>

//     );
// }



class Person extends Component {
   // eslint-disable-next-line no-useless-constructor
   constructor(props) {
      super(props);
   }
   render() {
     //console.log(this.props);
    return(
      <div>
        <h2>Name : {this.props.name} and  Age : {this.props.age} years</h2>
        <h4>Children : {this.props.children}</h4>
      </div>

     );
   }
}

export default Person;