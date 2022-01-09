import logo from './logo.svg';
import React from 'react';
import profileImage from "./img/profile-image.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>April's First React app!</h1>
      <h2>Welcome</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
