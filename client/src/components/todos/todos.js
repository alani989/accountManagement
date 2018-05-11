import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem';
import CreateTodo from './createTodo';

class Todos extends Component {

    render() {
        let todoList = []
        todoList = this.props.todos.map(todo => {
            return <TodoItem key={todo.reference} todo={todo} />
        })
        return (
            <div>
                <div className='headerItem'>
                    <h3>To Do List</h3>
                </div>
                <br />
                <div>
                    <CreateTodo />
                </div>
                <br/>
                <div>
                    {todoList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos);