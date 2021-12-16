import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
// import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Challenges from './components/Challenges'
import AboutUs from './components/AboutUs';


const App= () =>{

return (
    <div>
   
      <Navbar />
        <Switch>
          <Route path='/' exact  component={(props) => <Home {...props} />}/>
          <Route path='/sign-up' exact  component={(props) => <LoginForm {...props} />}/>
          <Route path='/challenges' exact  component={(props) => <Challenges {...props} />}/>
          <Route path='/about-us' exact  component={(props) => <AboutUs {...props} />}/>
          
        </Switch>
   
    </div>
);
}

export default App;