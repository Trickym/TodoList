import React from 'react'
import {Todo} from '../Components/Todo';
export const Todos = (props) => {
    return (
        <div className="container todo">
            <h3 className="my-3 fontw">Todos List</ h3>
            {props.todos.length===0?<div className="alert alert-danger">No Todos!</div>:
            props.todos.map((todo)=>{
                return (
                    <><hr/><Todo todo={todo} key={todo.slno} onDelete={props.onDelete}/></>
                )
            })
            }
        </div>
    )
}
