import React, { Component } from 'react';
import { connect } from 'react-redux';

class Intro extends Component {

    render() {

        let user = ''
        user = this.props.info.map(info => {
            return <h3 key={1}> Welcome {info.email}</h3>
        })
        return (
            <div>
                <div className='headerItem'>
                    {user}
                </div>
                <div className="summary">
                    <h3>Introduction</h3>
                    <p>About: Manage with React (MWR) is a software created to service account managers in their daily duties and responsibilities.
                        It grants account management teams access to manage their accounts and perform related operations in a fast, reliable, and lag-free fashion.
                        </p>
                    <p>
                        Features: The Account Managment Team have the ability to add new clients to their list.
                        Perform orders' shipping operations per the customer's requests and given orders' details.
                        Able to create reminders or a to-do list that aid them in their day to day tasks.
                        </p>
                    <p>
                        Specs: The software is built with React/Redux for the user experience, and Node/ExpressJS for the server and back-end operations.
                        The data is being stored using PostgreSQL database relational system.
                        </p>
                    <br />
                    <div className="futureGoals">
                        Future Goals:
                            <ul>
                            <li> Adding an inventory system. </li>
                            <li> Developing a full authentication process for user login/signup. </li>
                            <li> Featuring statistical and analytical data such as graphs and reports that provides the customers with statisfactory service. </li>
                            <li> Enabling systems integration (data exchange with different softwares the customers use). </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
} //end class

function mapStateToProps(state) {
    return {
        info: state.info,
    }
}

export default connect(mapStateToProps)(Intro);