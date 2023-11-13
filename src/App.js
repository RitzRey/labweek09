import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Title from './components/title/Title';
import Id from './components/studId/Id';
import Name from './components/studname/Name';
import Location from './components/location/Location';
import './BorderContainer.css';
/* 

    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>

*/

function App() {
  return (
    <React.Fragment>
    <div className='app-containerborder'>
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
      <Welcome />
      <Title />
      <Id />
      <Name fnm="Ritchel Rey" lnm="Etchorre"/>
      <Location college="George Brown College" city="Toronto" />
      </div> 
    </React.Fragment>
  );
}

export default App;
