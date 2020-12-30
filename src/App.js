import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import ResetPassword from './components/resetPassword';
import CircularLoader from './components/circularLoader';
import Home from './pages/home';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/resetPassword/:id' component={ResetPassword} />
        <Route path='/' exact component={Home} />
      </Switch>
    </main>
  );
}

export default App;
