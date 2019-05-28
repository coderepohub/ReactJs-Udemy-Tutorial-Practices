import React from 'react';
import Person from './Person/Person'

const persons  = (props)=>(
    props.persons.map((person,index)=>{
        return <Person click={props.clicked.bind(this,index)}
        name = {person.name} 
        age={person.age} 
        key={person.id} 
        changeNameText = {(event)=>this.changeNameTextFieldHandler(event,person.id)} />

    })
);

export default persons;