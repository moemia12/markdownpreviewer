import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

const marked = require("marked")

const outputBox = {
      display: 'inline-block',
      borderStyle: 'solid',
      height: '10rem',
      width: '50rem',
      position: 'relative',
      top: '5rem',
      wordBreak: 'break-word'
}

const inputBox = {
  borderStyle: 'solid',
  height: '10rem',
  width: '50rem',
  position: 'relative',
  top: '5rem',
  marginBottom: '3rem',
  textAlign: 'center',
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
          <h1>Markdown</h1>
          <p>This project is part of the FreeCodeCamp curriculum built using ReactJS and React Bootstrap. 
            <br></br>
            The Markdown output will output any text within the Markdown input area in Real time. 
          </p>
        </div>
        <div>
          <textarea id="editor" style={inputBox} componentClass="textarea" placeholder="Markdown-Input" value={markdown} onChange={(event)=>this.updateMarkdown(event.target.value)}></textarea>
        </div>
        <div style={outputBox} id="preview">
          <h2>Markdown Output</h2>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)}}></div>
        </div>
      </div>
    );
  }
  
}

export default App;
