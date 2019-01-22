import React from "react";

import { connect } from "react-redux";
import { login } from "../../store/actions/UserActions";

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.loginIntoProfile(
      e.target.elements[0].value,
      e.target.elements[1].value
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Your name" />
          <input placeholder="Your password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loginIntoProfile: (name, password) => dispatch(login(name, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
