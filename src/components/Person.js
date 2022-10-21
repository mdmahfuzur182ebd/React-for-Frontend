import React from 'react';



const Person = (props) => {
    console.log(props);
    return(
      <div>
        <h2>Name : {props.name} and  Age : {props.age} years</h2>
        <h4>Children : {props.children}</h4>
      </div>

    );
}

export default Person;