import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Col, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import updateAccounts from '../../actions/updateAccounts';

class CreateAccount extends Component {
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

    addAccount(e) {
        const uuidv1 = require('uuid/v1');
        let generated_reference = uuidv1();
        e.preventDefault();
        let data = {
            reference: generated_reference,
            owner_id: this.props.info.id,
            name: this.name.value,
            poc: this.poc.value,
            contact_info: this.contact_info.value
        };
        this.props.updateAccounts(data);
        fetch('/api/newaccount', {
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
        return (
            <div>
                <Button bsStyle="primary" onClick={this.handleShow}>
                    Creat New
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Account Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form horizontal>
                            <FormGroup controlId="formBasicText">
                                <Col componentClass={ControlLabel} sm={4}>
                                    Name
                                </Col>
                                <Col sm={8}>
                                    <FormControl type="text" placeholder="Account's Name"
                                        inputRef={(input) => this.name = input} />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formBasicText">
                                <Col componentClass={ControlLabel} sm={4}>
                                    Contact Personnel
                                </Col>
                                <Col sm={8}>
                                    <FormControl type="text" placeholder="Account's Point of Contact"
                                        inputRef={(input) => this.poc = input} />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formBasicText">
                                <Col componentClass={ControlLabel} sm={4}>
                                    Contact Info
                                </Col>
                                <Col sm={8}>
                                    <FormControl type="text" placeholder="Account's Contact Info"
                                        inputRef={(input) => this.contact_info = input}  />
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.addAccount.bind(this)} bsStyle="primary">Add</Button>
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
        accounts: state.accounts,
    }
}

export default connect(mapStatesToProps, { updateAccounts })(CreateAccount);