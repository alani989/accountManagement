import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import removeOrders from '../../actions/removeOrders'

class RemoveOrder extends Component {

    deleteOrder(e) {
        e.preventDefault();
        let data = {
            reference: this.props.reference
        }
        this.props.removeOrders(this.props.reference);
        fetch('/api/deleteorder', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        }).then(res => {
            res.json().then(data =>
                console.log('Order Deleted')
            )
        })
    }


    render() {
        return (
            <div>
                <Button bsStyle="danger" onClick={this.deleteOrder.bind(this)}>Remove</Button>
            </div>
        )
    }
} //end class


function mapStatesToProps(state) {
    return {
        orders: state.orders
    }
}

export default connect(mapStatesToProps, { removeOrders })(RemoveOrder);