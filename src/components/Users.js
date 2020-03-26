import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here

class Users extends Component {
  render() {
    console.log(this.props.users)
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => {
            return <li>{user.username}, {user.hometown}</li>
          })}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    // console.log(state)
    return {users: state.users}
  }

// connect this component to Redux
export default connect(mapStateToProps)(Users)
