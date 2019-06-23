import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Seperator"/>
      <div className="NavBar">
        <h1 className="PageTitle" >Inif</h1>
        <div className="NavBarLinks">
          {/* <a className="NavBarLink">Work</a>
          <a className="NavBarLink">About</a>
          <a className="NavBarLink">Contact</a> */}
        </div>
      </div>
      <div className="Landing">
        <div>
          <h2 className="LandingBody">Hey there, 👋 my name's Lawson and I'm a software developer!</h2>
          <h3>I'm currently building this site in my freetime, more to come! Please feel free to contact me at <a href="mailto:lawson@inif.io">lawson@inif.io</a></h3>
        </div>
      </div>
    </div>
  );
}

export default App;
