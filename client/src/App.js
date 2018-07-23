import React, { Component } from 'react';
import './App.css';
import AppNavBar from "./components/AppNavBar"
import InputToDo from './components/InputToDo';
import ToDoList from './components/ToDoList';
import {Provider} from 'react-redux';
import  store from './store'

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavBar />
          <InputToDo />
          <ToDoList />
        </div>
      </Provider>
    );
  }
}

export default App;
