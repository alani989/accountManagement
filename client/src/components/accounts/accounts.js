import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountItem from './accountItem';
import CreateAccount from './createAccount';

class Accounts extends Component {

    render() {
        const uuidv1 = require('uuid/v1');
        let accountsList = []
        accountsList = this.props.accounts.map(account => {
            return <AccountItem key={uuidv1()} account={account} />
        })
        return (
            <div>
                <div className='headerItem'>
                    <h3>My Accounts</h3>
                </div>
                <br />
                <div>
                    <CreateAccount />
                </div>
                <br />
                <div>
                    {accountsList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps)(Accounts);