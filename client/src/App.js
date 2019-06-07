import React from 'react';
import Customers from './components/customers';
import Register from './components/register-form';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route path='/' exact component={Register}></Route>
      <Route path='/register' exact component={Register}></Route>
      <Route path='/show-customers' exact component={Customers}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
