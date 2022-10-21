import React from 'react';



const Person = (props) => {
    console.log(props);
    return(
      <div>
        <h2>Name : {props.name} || Age : {props.age}</h2>
      </div>

    );
}

export default Person;