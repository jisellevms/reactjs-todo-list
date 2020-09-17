import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>Lista de tarefas</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
