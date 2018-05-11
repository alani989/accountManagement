import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import removeAccounts from '../../actions/removeAccounts'

class RemoveAccount extends Component {

    deleteAccount(e) {
        e.preventDefault();
        let data = {
            reference: this.props.reference
        }
        this.props.removeAccounts(this.props.accountName);
        fetch('/api/deleteaccount', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        }).then(res => {
            res.json().then(data =>
                console.log('Account Deleted')
            )
        })
    }

    render() {
        return (
            <div>
                <Button bsStyle="danger" onClick={this.deleteAccount.bind(this)}>Remove</Button>
            </div>
        )
    }
} //end class


function mapStatesToProps(state) {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStatesToProps, { removeAccounts })(RemoveAccount);