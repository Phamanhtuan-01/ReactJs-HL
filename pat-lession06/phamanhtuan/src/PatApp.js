import React, { Component } from "react";
import PatEventComp from "./components/PatEventComp";
import PatEventCompClass from "./components/PatEventCompClass";
import PatEventForm1 from "./components/PatEventForm1";
import PatEventForm2 from "./components/PatEventForm2";

class PatApp extends Component {
  render() {
    return (
      <div className="container border">
        <h1 className="text-center"> Phạm Anh Tuấn <br/>ReactJs - From - Event</h1>
        <hr/>

        <PatEventComp />

        <PatEventCompClass />

        <PatEventForm1 />

        <PatEventForm2 />
      </div>
    );
  }
}

export default PatApp;