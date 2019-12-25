import React, {Component} from 'react';
import './App.css';
import ChuckJokes from './components/chuck-jokes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChuckJokes />
      </div>
    )
  }
}

export default App;
