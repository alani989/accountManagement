import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import RemoveAccount from "./removeAccount";


export default class AccountItem extends Component {
    render() {
        return (
            <Jumbotron>
                <div className='item'>
                    <h3>Client: {this.props.account.name}</h3>
                    <p>
                        Point of Contact: {this.props.account.poc}
                    </p>
                    <p>
                        Contact Info: {this.props.account.contact_info}
                    </p>

                    <RemoveAccount accountName={this.props.account.name} reference={this.props.account.reference}/>

                </div>
            </Jumbotron>
        )
    }
}//end class