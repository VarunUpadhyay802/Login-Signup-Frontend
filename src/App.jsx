// Importing necessary modules from React
import React from 'react';

// Importing the stylesheet
import './App.css';
import Login from './Login';
import Signup from './Signup';

// Defining the App component
function App() {
  return (
    <div className="App">
      <Login/>
      <Signup/>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
