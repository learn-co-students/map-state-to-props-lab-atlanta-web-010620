import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here

class Users extends Component {
  render() {
    let userList = this.props.users.map( user => <li key={user.username}>{user.username}</li>)
    return (
      <div>
          Number of users is: {this.props.numberUsers}
        <ul>
          Users!
          {userList}
          <br></br>
        </ul>
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    // console.log(state)
    return {users: state.users, 
      numberUsers: state.users.length
    }
  }

// connect this component to Redux
export default connect(mapStateToProps)(Users)
