import React from 'react'
import { useState } from 'react';


export const Addtodo = (props) => {
    const [task,setTask] = useState("");
    const [desc,setDesc] = useState("");


    const submit=(e)=>{
        e.preventDefault();
        if(!task || !desc){
            alert("Task Name or Task Description cannot be empty!");
        }
        else{
        props.addTodo(task,desc);
        setTask("");
        setDesc("");
        }
    }
    return (
        <div className="container my-3 add-todo">
            <h3 className="fontw">Add a Task</h3>
            <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="task" className="form-label fontw">Task Name</label>
                <input type="text" className="form-control" value={task} onChange={(e)=>setTask(e.target.value)} id="task" placeholder="Enter Your Task Here"/>
                </div>
                <div className="mb-3">
                <label htmlFor="desc" className="form-label fontw">Task Description</label>
                <textarea className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" rows="3"></textarea>
                <button className="btn btn-primary btn-success my-3 fb_btn" type="submit">Add</button>
            </div>
            </form>
        </div>
    )
}
