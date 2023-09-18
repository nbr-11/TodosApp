import React, { useEffect } from 'react'
import { useTodo } from '../../context'
import { useState } from 'react';

function TodoItem({todo}) {
    
   
    const [isTodoEditable,setIsTodoEditable] = useState(true);
    const{updateTodo,deleteTodo,toggleComplete} = useTodo();
    
    const handleChangeCheck = (e) =>{
          toggleComplete(todo.id);
    }

    const handleEdit = ()=>{
      setIsTodoEditable((prev)=>!prev);
    }



  return (
    
          
          <div className={`flex flex-row  w-[95%] md:w-[650px] h-[100px] justify-between rounded-lg p-4 ${todo.completed?"bg-green-200 ": "bg-orange-100 p-2"}`}>
             
             <input type="checkbox" name="" id="" checked={todo.completed} onChange={handleChangeCheck}/>

             <input type="text" name="" id="" value={todo.message} readOnly={isTodoEditable} className={`${todo.completed?"bg-green-200 line-through":"bg-orange-100 p-2"} w-[80%] ${isTodoEditable?"outline-none":"outline-2 outline-black outline-double"}`} onChange={(e)=>{updateTodo(todo.id,{id:todo.id,message:e.target.value,completed:false})}}/>

             <button onClick={handleEdit} className='p-2' disabled={todo.completed}>{isTodoEditable?"edit":"save"}</button>
             
             <button onClick={()=>{deleteTodo(todo.id)}} className='p-2'>❌</button>

          </div>


    
  )
}

export default TodoItem