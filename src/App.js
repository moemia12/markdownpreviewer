import logo from './logo.svg';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup'
import ControlLabel from 'react-bootstrap/ControlLabel'
import FormControl from 'react-bootstrap/FormControl'


const marked = require("marked")

class App extends Component {

  render(){
    return (
      <div className="App">
        <div>
          <FormGroup controlID="formControlTextarea">
            <ControlLabel>Markdown Input</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Enter Markdown"></FormControl>
          </FormGroup>
        </div>
      </div>
    );
  }
  
}

export default App;
