import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import shipOrders from '../../actions/shipOrders';
import { connect } from 'react-redux';

class ShipOrder extends Component {

    changeStatus(e) {
        e.preventDefault();
        this.props.shipOrders(this.props.reference, 'shipped');
        let data = {
            reference: this.props.reference,
            status: "shipped"
        }
        fetch('/api/shiporder', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        }).then(res => {
            res.json().then(data =>
                console.log('Order Shipped')
            )
        })
    }

    render() {
        return (
            <div>
                <Button bsStyle="warning" onClick={this.changeStatus.bind(this)}>Ship</Button>
            </div>
        )
    }

}

function mapStatesToProps(state) {
    return {
        orders: state.orders
    }
}

export default connect (mapStatesToProps,{shipOrders})(ShipOrder);
