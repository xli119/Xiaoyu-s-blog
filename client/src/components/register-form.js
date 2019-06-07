import React from 'react';
const axios = require('axios');


class Register extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    let o = {};
    o[event.target.name] = event.target.value;
    this.setState(o);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/customers', ({
      username: this.state.username,
      password: this.state.password
    }))
    .then(res => {
      console.log('res.data: ', res.data);
      const errCode = res.data.err_code;
      if(errCode === 0){
        window.alert('regisetered successfully');
      } else if (errCode === 1) {
        window.alert('Username already exists.')
      } else if (errCode === 500) {
        window.alert('Server is busy');
      }
    })
    .catch(error => {
      console.log('error:', error.response)
  })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>your username
              <input onChange={this.handleChange} type="text" className="form-control" name="username" id="input_name" placeholder="name" required minLength="2" maxLength="12" />
            </label>
          </div>
          <div className="form-group">
            <label>password
              <input onChange={this.handleChange} className="form-control"  type="password" name="password" id="password" required minLength="3"/>
            </label>
          </div>
          <button className="btn btn-default" type="submit">Register</button>
        </form>
      </div>
    );
  };
}

export default Register;