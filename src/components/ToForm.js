import React, { useState } from 'react'

export const ToForm = ({addTodo}) => {
    const[value,setValue]=useState("")

    const handleSubmit= e =>{
      e.preventDefault();
      addTodo(value);
      setValue("");
    }
  return (
    <form className="Todoform" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={value} placeholder="What is the task today?" onChange={(e)=>setValue(e.target.value)}/>
      <button type="switch" className='todo-btn'>Add Task</button>
    </form>
  )
}


