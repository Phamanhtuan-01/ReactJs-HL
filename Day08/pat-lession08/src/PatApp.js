import React from 'react';
import PatUseState from './components/PatUseState';
import PatListStudent from './components/PatListStudent';
import PatUseEffectDemo from './components/PatUseEffectDemo';
import PatExampleContext from './components/PatExampleContext';



export default function PatApp() {
  return (
    <div className="container border">
      <h1>React Hook - Demo [Phạm Anh Tuấn]</h1>
      <hr />
      {/*<PatUseState />

      <PatListStudent />

      <PatUseEffectDemo />*/}

      <PatExampleContext />
      
    </div>
  );
}