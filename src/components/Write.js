import {React, useState} from 'react';
import '../App.css';
import Tasks from './Tasks';


function Write() {

    const [newTask, setNewTask] = useState("");
    const [todoList, setTodoList] = useState([]);


    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1 ,
            taskName: newTask,
            completed: false
        };
        setTodoList([...todoList, task]);   
    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => id !== task.id))
    }

    const completeTask = (id) => {
        setTodoList(todoList.map((task) => {
            if (id === task.id) {
                return {...task, completed: true}
            }
            return task;
        }))
    }


 
    return (
        <div className='app'>
            <h1>Todo List</h1>
            <div className='addTask'>
                <input type="text" onChange={handleChange}/>  
                <button onClick={addTask}>Add task</button>
            </div>
            <div className='Tasks'>
                {todoList.map((task) => {
                    return <Tasks completed = {task.completed} completeTask = {completeTask} id={task.id} Name={task.taskName} deleteTask={deleteTask}/>
                })}
            </div>


        </div>
    )

}

export default Write;