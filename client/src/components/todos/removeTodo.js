import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import removeTodos from '../../actions/removeTodos'

class RemoveTodo extends Component {

    deleteTodo(e) {
        e.preventDefault();
        let data = {
            reference: this.props.reference
        }
        this.props.removeTodos(this.props.reference);
        fetch('/api/deletetodo', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        }).then(res => {
            res.json().then(data =>
                console.log('Todo Deleted')
            )
        })
    }

    render() {
        return (
            <div>
                <Button bsStyle="success" onClick={this.deleteTodo.bind(this)}>Mark as Done</Button>
            </div>
        )
    }
} //end class


function mapStatesToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStatesToProps, { removeTodos })(RemoveTodo);