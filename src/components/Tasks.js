import React from 'react'
import '../App.css'


function Tasks(props) {
    return(
        <div style={{backgroundColor: props.completed ? "lightgreen" : "white"}}>
         <h1>{props.Name}</h1>
         <button onClick={() => props.completeTask(props.id)}>Completed</button>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div> 
    )   
}

export default Tasks;