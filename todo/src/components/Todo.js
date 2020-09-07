import React from 'react';

export default function Todo(props){
    // console.log(props);
    return(
        <div>
            <span>Todo: {props.todo.item} Completed: {props.todo.completed.toString()}</span>
            <span>
                <button onClick = {props.toggleComplete} >Toggle Complete</button>
            </span>
        </div>
        
    )
}