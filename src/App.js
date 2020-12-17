// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
//ROOT COMPONENT App.js
//function App() {
 import Todos from './Todos.js'
 import AddTodo from './AddTodo'
class App extends Component {
  state = {
    todos : [
      {id:1 ,content: 'do assignment '},
      {id:2 , content : 'play'}
    ]
  }
  deleteTodo = (id) => {//filter func
   // console.log(id);
   const todos =this.state.todos.filter(todo =>{
     return todo.id !== id 
   });
   this.setState({todos })//todos : todos})
  }

  //after submit
addTodo = (todo) => {
todo.id = Math.random();
let todos =[...this.state.todos,todo]//todos is new array = oldarray spread op
this.setState({ todos })//todos : todos })
}


render(){
return (
    <div className="todoApp container">
    
 <h1 className="center red-text banner">Todo's</h1>    
     <Todos  todos={this.state.todos} deleteTodo={this.deleteTodo }/>
    <AddTodo addTodo={this.addTodo}/>
    </div>
  );
}
}

export default App;
