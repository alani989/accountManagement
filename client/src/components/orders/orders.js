import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderItemActive from './orderItemActive';
import OrderItemShipped from './orderItemShipped';
import CreateOrder from './createOrder';
import { Tabs, Tab } from 'react-bootstrap'

class Orders extends Component {

    render() {
        let activeOrders = []
        activeOrders = this.props.orders.map(order => {
            if (order.status === 'active') {
                return <OrderItemActive key={order.reference} order={order} />
            }
            return ''
        })

        let shippedOrders = []
        shippedOrders = this.props.orders.map(order => {
            if (order.status === 'shipped') {
                return <OrderItemShipped key={order.reference} order={order} />
            }
            return ''
        })

        return (
            <div>
                <div className='headerItem'>
                    <h3>My Orders</h3>
                </div>
                <br />
                <div>
                    <CreateOrder />
                </div>
                <br />
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Active Orders">
                        {activeOrders}
                    </Tab>
                    <Tab eventKey={2} title="Shipped Orders">
                        {shippedOrders}
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(Orders);