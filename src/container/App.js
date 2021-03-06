import React ,{Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//Creating Component as Class
class App extends Component{
  
  //State mainatinance for this component
  state = {
    persons : [
      {id : 1,name:'Mark',age:26},
      {id : 2,name:'John',age:29},
      {id : 3,name:'Ele',age:23},
    ],
    isPersonVisible:false
  }
 
  //Event Handler
  changeStateHandler = (changedName)=>{
    //We can change the state inside the component by calling SetState Method 
    this.setState({
      persons : [
        {id:1,name:changedName,age:31},
        {id:2,name:'John',age:29},
        {id:3,name:'Ele',age:24},
      ]
    }
    )
  };

  //Two way biding Event Handler 
  changeNameTextFieldHandler = (event,id) => {

    //finding the index fro list to which name has to be changed
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id;
    });

    //creating a person obbject with the value from the list for particular index
    const person ={
        ...this.state.persons[personIndex]
    };
    //changing the value to the specified value from user input
    person.name= event.target.value;
    //fetching all the person details and saving into new array
    const persons = [...this.state.persons];
    //changing the existing value from the changed index to updated person details
    persons[personIndex] = person;
    this.setState({persons:persons});

    /*
    this.setState({
      persons : [
        {name:'Marky',age:31},
        {name:event.target.value,age:29},
        {name:'Ele',age:24},
      ]
    }
    )*/
  };

  //Deleting Person From List Event Handler
deletePersonFromListHandler = (id) =>{
  //const persons = this.state.persons.slice();
  //Creating a copy of array, removing the element in index passed and
  //then assigning it to the state
  const persons = [...this.state.persons]
  persons.splice(id,1);
  this.setState({persons:persons});
}

  togglePersonListHandler = ()=>{
    var isvisible = this.state.isPersonVisible;
    this.setState({
      isPersonVisible : !isvisible
    })
  };

  render(){
//For Inline CSS
        const style = {
          backgroundColor:'green',
          color:'white',
          font:'inherit',
          border:'1px solid, blue',
          padding : '8px',
          cursor: 'pointer'
        };

    let personList = null;

      if(this.state.isPersonVisible){
        personList =( 
          <div>
            <Persons
              persons = {this.state.persons}
             clicked = {this.deletePersonFromListHandler}
             changedName = {this.changeNameTextFieldHandler}
             />
          </div>
        );
        //Setting style Dynamically
        style.backgroundColor='red';
    }

   
    return(
      <div className="App">
      <Cockpit persons={this.state.persons}
      clicked = {this.togglePersonListHandler}
      />
     {personList}
      </div>
    );
  }
}



export default App;
