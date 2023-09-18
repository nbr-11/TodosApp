import './App.css'
import { TodoForm,TodoItem } from './components'
import { useTodo,TodoContext,TodoProvider } from './context'
import { useEffect, useState } from 'react';

function App() {

  const [todos,setTodos] = useState([]);
  

  const addTodo = (todo)=>{
    setTodos([{id:Date.now(),...todo},...todos]);
  }

  const updateTodo = (id,todo)=>{
    setTodos((prevTodos)=>prevTodos.map((prevTodo)=>(prevTodo.id === id)? todo: prevTodo));
  }

  const deleteTodo = (id)=>{
    setTodos((prevTodos)=>prevTodos.filter((prevTodo)=>{ return prevTodo.id!== id}))
  }

  const toggleComplete = (id)=>{
    setTodos((prevTodos)=>prevTodos.map((prevTodo)=>{return (prevTodo.id === id)?{...prevTodo,completed:!prevTodo.completed}:prevTodo}))
  }
  

  useEffect(()=>{
   const temp = JSON.parse(localStorage.getItem('todos'));

   if( temp && temp.length>0){
    setTodos(temp);
   }
   
  },[])

  useEffect(()=>{
   localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
       
      <div className='w-screen h-screen bg-slate-800 flex flex-col items-center overflow-y-scroll'>
        
        <div className='mt-8 flex flex-row justify-center items-center w-full'>
        <TodoForm/>
        </div>
        
        <div className='mt-8 flex flex-col items-center bg-white  p-4 h-fit gap-5 rounded-lg justify-center'>
         {/* Here we will loop cause there are multiple values */}

         {

        todos.length>0? todos.map((todo)=>{return <TodoItem todo={todo}/>}) : "No todos"
          
         }
        </div>
        
      </div>
    </TodoProvider>
  )
}

export default App
