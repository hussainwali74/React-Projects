import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//glue for redux and react
import { Provider } from 'react-redux';

//============================================
// REDUX STUFF
//============================================
import store from './components/store';
//============================================
// END REDUX STUFF
//============================================

//custom imports
import Posts from './components/Posts';
import Postform from './components/Postform';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
