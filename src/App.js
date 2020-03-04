import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: 'Akshay Kumar',
  };

  nameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  render() {
    const style = {
      margin: '0 auto',
      width: '300px',
    }
    return (
      <div className="App">
        <div style={style}>
          <UserOutput userName={this.state.userName} />
          <UserInput changed={this.nameChangeHandler} userName={this.state.userName}/>
        </div>
      </div>
    );
  }
}

export default App;
