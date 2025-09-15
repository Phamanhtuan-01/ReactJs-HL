import React, { Component } from 'react';

class PatrRenderList extends Component {
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
            <div>
                <h2>Danh sách sinh viên</h2>
                <hr/>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map((student, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.age}</td>
                                        <td>{student.address}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            <button>Xem</button>
                                            <button>Sửa</button>
                                            <button>Xóa</button>
                                        </td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default PatrRenderList;
