import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true,
  };
  addTodo = (todo) => {
    this.setState((state) => ({
      todos: [todo, ...state.todos],
    }));
  };
  toggleComplete = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          //Suppose to Update
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };
  uddateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };
  handleDeleteTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };
  removeAllCompleteToDo = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };
  handletoggleAllComplete = () => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => ({
        ...todo,
        complete: state.toggleAllComplete,
      })),
      toggleAllComplete: !state.toggleAllComplete,
    }));
  };
  render() {
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            toggleComplete={() => this.toggleComplete(todo.id)}
            key={todo.id}
            todo={todo}
            onDelete={() => this.handleDeleteTodo(todo.id)}
          />
        ))}
        <div>
          todos left:{this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.uddateTodoToShow("all")}>all</button>
          <button onClick={() => this.uddateTodoToShow("active")}>
            active
          </button>
          <button onClick={() => this.uddateTodoToShow("complete")}>
            complete
          </button>
        </div>
        {this.state.todos.some((todo) => todo.complete) ? (
          <div>
            <button onClick={this.removeAllCompleteToDo}>
              Remove All Compelete
            </button>
          </div>
        ) : null}
        <div>
          <button onClick={this.handletoggleAllComplete}>
            toggle all complete: {`${this.state.toggleAllComplete}`}
          </button>
        </div>
      </div>
    );
  }
}
