import React, { Component } from 'react'
import TodoList from './TodoList'
export default class apsx extends Component {
    state={
        count:0
    };
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    render() {
        return (
            <div className="App">
               <TodoList/> 
            </div>
        )
    }
}
