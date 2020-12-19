import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ResumeForm from './pages/resumeForm';
import FinalForm from './pages/finalPage';
import Navbar from './components/navbar';

function App() {
  return (
    <main>
      <Navbar />
      <div className="container-fluid">
        {/* <ResumeForm /> */}
        <Switch>
          <Route path="/submit" component={FinalForm} />
          <Route path="/form" component={ResumeForm} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </main>
  );
}

export default App;
