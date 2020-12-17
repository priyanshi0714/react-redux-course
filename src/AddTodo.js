import React, { Component } from 'react';

class  AddTodo  extends Component
 {
    state = {
   content : ' ' 
    }
    //handler func
    handleChange =(e) =>{
   this.setState({
       content : e.target.value
   })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
       // console.log(this.state);
        //noow submit
        this.props.addTodo(this.state)//send up in state
        this.setState({content : ''})
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo item : </label>
                    <input type="text" onChange={this.handleChange}  value={this.state.content}></input>
                </form>
            </div>
        )
    }
}
export  default AddTodo