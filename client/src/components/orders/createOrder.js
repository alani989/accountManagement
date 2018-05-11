import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Col, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import updateOrders from '../../actions/updateOrders';

class CreateOrder extends Component {
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

    addOrder(e) {
        e.preventDefault();
        // generate a random reference #
        const uuidv1 = require('uuid/v1');
        let orderReference = uuidv1().slice(0, 7)
        let data = {
            reference: orderReference,
            owner_id: this.props.info.id,
            account_name: this.refs.selectedAccount.value,
            ship_to: this.shipTo.value,
            ship_date: this.shipDate.value,
            status: 'active'
        };
        this.props.updateOrders(data);
        fetch('/api/neworder', {
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
                        <Modal.Title>New Order Form</Modal.Title>
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
                                    Ship To Address
                                </Col>
                                <Col sm={9}>
                                    <FormControl type="text" placeholder="Shipping to..."
                                        inputRef={(input) => this.shipTo = input} />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formBasicText">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Ship Date
                                </Col>
                                <Col sm={9}>
                                    <FormControl type="date" placeholder='Shipping Date'
                                        inputRef={(input) => this.shipDate = input} />
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.addOrder.bind(this)} bsStyle="primary">Add</Button>
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
        orders: state.orders,
        accounts: state.accounts,
    }
}

export default connect(mapStatesToProps, { updateOrders })(CreateOrder);