import React from 'react';
import PatUseState from './components/PatUseState';
import PatListStudent from './components/PatListStudent';



export default function PatApp() {
  return (
    <div className="container border">
      <h1>React Hook - Demo [Phạm Anh Tuấn]</h1>
      <hr />
      <PatUseState />

      <PatListStudent />
      
    </div>
  );
}