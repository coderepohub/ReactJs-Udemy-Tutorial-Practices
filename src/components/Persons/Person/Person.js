import React from 'react';
import './Person.css'
// Creating Person Component as Function
//NOTE - Try to use Functional Component more often rather than using Class Component 
//bcz - these functional comp are dynamic and they don't manipulate app state like Class Comp
//
//props - give access to html atributes which we add in app.js or root 

const person = (props) =>{
    return (
        <div className="Person">
    <p onClick={props.click}>I'm {props.name} and my Age is {props.age}</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changeNameText} value={props.name}/>
    </div>
    )
};

export default person;