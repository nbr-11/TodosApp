import React, { useState } from 'react'
import { useTodo } from '../../context';


function TodoForm() {


    const [todo,setTodo] = useState("");

    const {addTodo} = useTodo();

    const add = (event)=>{
        event.preventDefault();
        addTodo({id:Date.now(),message:todo,completed:false})
        setTodo(" ");
    }

  return (
    <>
     <form onSubmit={add} className='flex flex-row bg-white w-[90%] md:w-[65%] h-[60px] justify-between rounded-lg'>
         <input type="text"  className='w-[80%] md:w-[80%] outline-none border-none p-5 text-xl md:text-2xl rounded-lg' placeholder='Enter the todo Message' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
         <button type="Submit" className='bg-violet-500 text-white w-[20%] md:w-[10%]  text-xl md:text-2xl  font-semibold rounded-e-lg'>Add</button>
     </form>
    </>
  )
}

export default TodoForm