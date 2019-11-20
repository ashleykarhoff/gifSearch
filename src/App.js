import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation/Navigation';
import CardContainer from './components/body/CardContainer';


function App() {
  return (<div>
    <Navigation />
    <CardContainer />
  </div>
  );
}

export default App;
