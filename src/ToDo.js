import React, { Component } from 'react';
import { Holdable } from 'react-touch';


class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      thingsToDo: [
      'First thing to do', 
      'Second thing to do', 
      'Third thing to do', 
      'Then another thing I might not do, idk tbh'
      ],
      newThing: '',
      textdecoration: 'linethrough'
    };

  }

  addThing (event) {
    event.preventDefault();

    const thingsToDo = this.state.thingsToDo;
    thingsToDo.push(this.state.newThing);

    this.setState({
      newThing: '',
      thingsToDo: thingsToDo
    });
  }

  handleNewThingInput (event) {
    this.setState({ newThing: event.target.value });
  }

  deleteElement (event) {
    this.setState({
        thingsToDo: this.state.thingsToDo.filter(function (e, i) {
        return i !== event;
      })
    });
  }

  render() {
    return (
      <div id="todo-div">

      <h1>To Do</h1>

        <form onSubmit={this.addThing.bind(this)}>
          <input 
          id="todo-input"
          type="text" 
          onChange={this.handleNewThingInput.bind(this)}
          placeholder = "What are you doing today?"
          value ={this.state.newThing} 
          />
        </form>

        {this.state.thingsToDo.map((things,i) => 
        	<div> 
        	  <ul
        	  id="todo-list"
        	  key={'things' + i}
        	  onClick={this.deleteElement.bind(this, i)}>
        	  {things}
        	  </ul> 
        	</div>
        	)}

      </div>
    );
  }
}

export default ToDoList;