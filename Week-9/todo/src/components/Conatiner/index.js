import React, { useState } from 'react'
import classes from './Container.module.css'
import TodoCard from '../TodoCard'


function Container() {
    let [Data, setData] = useState([{ id: 0, task: "write code" }, { id: 1, task: "learn react" }, { id: 2, task: "develop todo app" }])
    let [DataComplete, setDataComplete] = useState([])
    let [Task, setTask] = useState("")

    const TaskComplete = (id) => {
        let CompleTask = Data.filter((item) => item.id === id)
        let remainingTask = Data.filter((item) => item.id !== id)
        setDataComplete([...DataComplete, CompleTask[0]])
        setData(remainingTask)
    }

    const AddNewTask = () => {
        if (Task !== "") {
            let Id = Date.now().toString(36) + Math.random().toString(36).substr(2);;
            let data = { id: Id, task: Task }
            console.log([...Data, data])
            setData([...Data, data])
            setTask("")
        }
    }
    const KeyPress = (event) => {
        if (event.key === 'Enter') {
            AddNewTask()
        }
    }

    return (
        <div className={classes.wrapper}>
            <TodoCard data={Data} TaskComplete={TaskComplete} type="Add" />
            <input type="text" placeholder='Enter task here' value={Task} onChange={(e) => setTask(e.target.value)} onKeyPress={(e) => KeyPress(e)} className={classes.TaskInput} />
            <button onClick={() => AddNewTask()} className={classes.AddButton}> Add</button>
            <TodoCard data={DataComplete} TaskComplete={TaskComplete} type="Complete" />
        </div>
    )
}

export default Container