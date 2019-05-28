import React from 'react';
import cssClass from './Cockpit.css';

const Cockpit = (props) =>{
    const classes = [];
    if(props.persons.length<=2){
      classes.push('red');
    }
    if(props.persons.length<=1){
      classes.push('bold');
    }

    const style = {
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid, blue',
        padding : '8px',
        cursor: 'pointer'
      };


return(
<div>
  <h1>Hi, First React App</h1>{alert(classes.join(' '))}
      <p className={classes.join(' ')}>It's working...</p>
      <br/>
      <button style={style} onClick={props.clicked}>Toggle Persons</button>
      <br/>
</div>
);
}

export default Cockpit;