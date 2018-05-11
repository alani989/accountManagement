import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Intro from './intro'
import Accounts from './accounts/accounts';
import Orders from './orders/orders';
import Todos from './todos/todos';

import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

export default class MainPage extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <LinkContainer to="/">
                                    <label className='brand'> MWR </label>
                                </LinkContainer>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <LinkContainer to="/accounts">
                                    <NavItem>Accounts</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/orders">
                                    <NavItem>Orders</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/todos">
                                    <NavItem>To Do List</NavItem>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route exact path="/" component={Intro} />
                    <Route path="/accounts" component={Accounts} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/todos" component={Todos} />

                </div>
            </Router>
        )
    }
}