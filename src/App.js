import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'



const marked = require("marked")

const outputBox = {
      borderStyle: 'solid',
      height: '10rem',
      width: '50rem',
      position: 'relative',
      top: '5rem',
      left: '34.7rem'
}

const inputBox = {
  borderStyle: 'solid',
  height: '10rem',
  width: '50rem',
  position: 'relative',
  top: '5rem',
  marginBottom: '3rem',
  textAlign: 'center'
}

class App extends Component{
state={
  markdown: ""
}

  updateMarkdown = function(markdown){
    this.setState({markdown});
  }

  render(){
    let {markdown} = this.state;

    return (
      <div className="App container">
        <div>
          <FormGroup controlID="formControlTextarea">
            <FormControl style={inputBox}componentClass="textarea" placeholder="Markdown-Input" value={markdown} onChange={(event)=>this.updateMarkdown(event.target.value)}></FormControl>
          </FormGroup>
        </div>
        <div style={outputBox} >
          <h2>Markdown Output</h2>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)}}>
            
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
