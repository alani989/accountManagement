import React, { Component } from 'react';
import MainPage from './components/mainpage'
//redux
import { connect } from 'react-redux';
import updateInfo from './actions/updateInfo';
import updateAccounts from './actions/updateAccounts';
import updateOrders from './actions/updateOrders';
import updateTodos from './actions/updateTodos';


class App extends Component {

  //api call to collect data from database
  loadProfile() {
    fetch('/api/loadprofile/3')
      .then(res => {
        res.json()
          .then(profile =>
            this.props.updateInfo(profile.info) +
            this.props.updateAccounts(profile.accounts) +
            this.props.updateOrders(profile.orders) +
            this.props.updateTodos(profile.todo)
          )
      })
  }//end loadProfile

  componentDidMount() {
    this.loadProfile();
  }

  render() {
    return (
      <div>
        <MainPage />
      </div>

    );
  }

}//end class

function mapStateToProps(state) {
  return {
    info: state.info,
    accounts: state.accounts,
    orders: state.orders,
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { updateInfo, updateAccounts, updateOrders, updateTodos })(App);
