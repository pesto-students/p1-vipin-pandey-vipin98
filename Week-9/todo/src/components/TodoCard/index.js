import React from 'react'
import classes from './TodoCard.module.css'

const TodoCard = (props) => {
    return (
        <div className={classes.container} style={{ backgroundColor: props.type !== "Add" ? "red" : "blue" }}>

            <h1>{props.type === "Add" ? "Todo Task" : "Complete Task"} </h1>
            <div className={classes.TaskWarrper}>
                {props.type === "Add" ?
                    props.data.map((item, index) => (
                        <div className={classes.taskList} key={item.id}>
                            <input type="checkbox" onChange={() => props.TaskComplete(item.id)} />
                            <p>{item.task}</p>
                        </div>
                    ))
                    :
                    props.data.map((item) => (
                        <div className={classes.CompleteTaskList} key={item.id}>
                            <p>{item.task}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default TodoCard