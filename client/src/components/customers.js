import React from 'react';
import './customers.css';

class Customers extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      customers: []
    }
  }

  componentWillMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched..', 
      customers)));
  }
  render(){
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customers =>
          <li key={customers.id}>username: {customers.username}, password: {customers.password}, id: {customers.id}</li>)}
        </ul>
      </div>
    );
  };
  
}

export default Customers;
