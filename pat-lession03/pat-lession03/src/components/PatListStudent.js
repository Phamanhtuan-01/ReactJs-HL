import React, { Component } from 'react';

class PatListStudent extends Component {
    render() {
        let {student} = this.props;
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
                            this.props.students.map((student, index)=>{
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
export default PatListStudent;
