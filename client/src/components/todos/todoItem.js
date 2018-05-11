import React, { Component } from 'react';
import { Jumbotron, Col } from 'react-bootstrap';
import RemoveTodo from './removeTodo';

export default class TodoItem extends Component {

    render() {
        return (
            <Col sm={6}>
                <Jumbotron>
                    <div className='item'>
                        <h3>Client: {this.props.todo.account_name}</h3>
                        <p>
                            {this.props.todo.content}
                        </p>
                        <RemoveTodo reference={this.props.todo.reference} />
                    </div>
                </Jumbotron>
            </Col>

        )
    }
}//end class