import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           color: "uppgift13-1"
        };
        this.uppgift13 = this.uppgift13.bind(this)
    }
  render() {
    return (
      <div className="App">
          <h1 className={this.state.color} >Hello</h1>
            <h2 className={this.state.color} onClick={this.uppgift13}>Color</h2>    
          <p> Uppgift 13.1 :lägga till html element</p>
        
      </div>
    );
  }
   
    uppgift13() {
        this.setState ({ color: "uppgift13Event" });
    }
}

export default App;
