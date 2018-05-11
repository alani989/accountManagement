import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Col, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import updateTodos from '../../actions/updateTodos';

class CreateTodo extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    addTodo(e) {
        e.preventDefault();
        const uuidv1 = require('uuid/v1');
        let generated_reference = uuidv1();
        let data = {
            reference: generated_reference,
            owner_id: this.props.info.id,
            account_name: this.refs.selectedAccount.value,
            content: this.content.value
        };
        this.props.updateTodos(data);
        fetch('/api/newtodo', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        }).then(res => {
            res.json().then(data =>
                console.log('State Updated')
            )
        })
            .then(this.handleClose())
    }

    render() {
        const uuidv1 = require('uuid/v1');
        let accountsList = []
        accountsList = this.props.accounts.map(account => {
            return <option key={uuidv1()}>{account.name}</option>
        })

        return (
            <div>
                <Button bsStyle="primary" onClick={this.handleShow}>
                    Creat New
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New To-Do Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form horizontal>
                            <FormGroup controlId="formBasicText">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Client
                                </Col>
                                <Col sm={9}>
                                    <select className="form-control" ref='selectedAccount'>
                                        {accountsList}
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formBasicText">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Content
                                </Col>
                                <Col sm={9}>
                                    <FormControl type="test" placeholder="Content..."
                                        inputRef={(input) => this.content = input} />
                                </Col>
                            </FormGroup>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.addTodo.bind(this)} bsStyle="primary">Add</Button>
                        <Button onClick={this.handleClose}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

function mapStatesToProps(state) {
    return {
        info: state.info[0],
        todos: state.todos,
        accounts: state.accounts,
    }
}

export default connect(mapStatesToProps, { updateTodos })(CreateTodo);