import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./TodoList.css";

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
        <div className="todo-left">
          Todos Left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            toggleComplete={() => this.toggleComplete(todo.id)}
            key={todo.id}
            todo={todo}
            onDelete={() => this.handleDeleteTodo(todo.id)}
          />
        ))}
        <hr />
        <div className="btn-group">
          <button
            className="button green"
            onClick={() => this.uddateTodoToShow("all")}
          >
            All
          </button>
          <button
            className="button blue"
            onClick={() => this.uddateTodoToShow("active")}
          >
            Active
          </button>
          <button
            className="button red"
            onClick={() => this.uddateTodoToShow("complete")}
          >
            Complete
          </button>
          {this.state.todos.some((todo) => todo.complete) ? (
            <button
              className="button gray"
              onClick={this.removeAllCompleteToDo}
            >
              Remove All Compelete
            </button>
          ) : null}

          <button
            className="button black"
            onClick={this.handletoggleAllComplete}
          >
            Toggle All Complete: {`${this.state.toggleAllComplete}`}
          </button>
        </div>
      </div>
    );
  }
}
