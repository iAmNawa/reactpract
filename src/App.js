import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
   return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <Person name="Paul" age="30"/>
        <Person name="Max" age="29"/>
        <Person name="Emily" age="26"/>
      </div>
      );
      //return React.createElement('div', { className: "App" }, React.createElement('h1', { className: "Appchild"}, 'Does this work now?'))
  }
}

export default App;
