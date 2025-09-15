import React, { Component } from 'react';
import PatFuncComp from './components/PatFuncComp';
import PatClassComp from './components/PatClassComp';
import PatrRenderList from './components/PatrRenderList';
import PatListStudent from './components/PatListStudent';

class PatApp extends Component {
  constructor(props){
    super(props);
    this.state = {
            students:[
                { id: 1, name: "Nguyễn Văn A", age: 20, address: "Hà Nội", email: "a@example.com" },
                { id: 2, name: "Trần Thị B", age: 21, address: "Hải Phòng", email: "b@example.com" },
                { id: 3, name: "Lê Văn C", age: 22, address: "Đà Nẵng", email: "c@example.com" },
                { id: 4, name: "Phạm Thị D", age: 19, address: "TP.HCM", email: "d@example.com" },
                { id: 5, name: "Hoàng Văn E", age: 23, address: "Cần Thơ", email: "e@example.com" }
            ],
    
        }
  }
  render() {
    return (
      <div className='container border'>
        <h1> Phạm Anh Tuấn </h1>
        <h2>Ôn tập: conponent / props / state / Render ListKey</h2>
        <hr/>
        <PatFuncComp />
        <hr/>
        <PatFuncComp fullName="Anh Tuấn" address="FitNTU" email="anhtuan@gmail.com"></PatFuncComp>

        <PatClassComp />
        <PatClassComp name="Tuấn Tuấn" age="21" phone="0987652552" email="anhtuan@gmail.com"></PatClassComp>
        <hr/>
        <PatrRenderList />
        <hr/>
        <PatListStudent students = {this.state.students} />
      </div>
    );
  }
}

export default PatApp;
