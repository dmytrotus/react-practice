import React from 'react';
//import ReactDOM from 'react-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        Nav
        <div style={{ float: "right" }}>
          {this.props.username && `Welcome ${this.props.username}`}
        </div>
      </nav>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="form-signin form-group" onSubmit={this.props.handleSubmit}>
          <input className="form-control m-1" placeholder="User Name" type="text" name="username" />
          <input className="form-control m-1" placeholder="Password" type="password" name="password" />
          <input className="w-100 btn btn-danger m-1" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class FormProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      username: event.target.elements.username.value,
      password: event.target.elements.password.value
    });

    // Do your session storage here if needed
    // sessionStorage.setItem('something', 'somevalue');
  }

  render() {
    return (
      <div>
        <Nav username={this.state.username} />
        <Login
          handleSubmit={this.handleSubmit}
          onUsernameChange={this.onUsernameChange}
          onPasswordChange={this.onPasswordChange}
          username={this.state.username}
          password={this.state.password}
        />
      </div>
    );
  }
}

export default FormProps;