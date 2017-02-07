import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        App component
      </div>
    );
  }
}

export default App;

/*
We can try to see changes in our state if we add the following code in: src/App.js:. (It won't work, but let's give it a shot - A for effort I always say.)

  class App extends Component {
    handleOnClick(){
      this.props.store.dispatch({type: 'INCREASE_COUNT'})
    }
    render() {
      return (
        <div className="App">
            <button onClick={this.handleOnClick.bind(this)}>Click</button>
            <p> {this.props.store.getState().items.length}</p>
        </div>
      );
    }
  }
*/
