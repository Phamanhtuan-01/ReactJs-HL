import React from 'react'

export default function PatEventComp() {
    const pat_Func1 = ()=>{
        alert("Xin Chào")
    }
    const pat_Func2 = (param)=>{
        alert(param)
    }

    return (
        <div>
        <h1>Event - Component Function</h1>
            <button onClick={pat_Func1}>Click Here</button>


            <button onClick={pat_Func2('Anh Tuấn')}>Click Here Param</button>
        </div>
    )
}
