import React, { Component } from 'react';

class PatEventCompClass extends Component {

    pat_Func1 = ()=>{
        alert("Hàm không có tham số")
    }

    pat_Func2 = (param)=>{
        alert("Hàm có tham số:\n"+ param)
    }


    render() {
        return (
            <div>
                <h2>Event in class components</h2>
                <button onClick={this.pat_Func1}>Click</button>
                <button onClick={()=>this.pat_Func2("Phạm Anh Tuấn")}>Click Param</button>
            </div>
        );
    }
}
export default PatEventCompClass
