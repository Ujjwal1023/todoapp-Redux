import React,{useState} from "react";
import {addTodo, deleteTodo,updateTodo} from '../redux/actions/todoAction';
import { useSelector,useDispatch } from "react-redux";
import {v4 as uuidv4} from 'uuid';

const ToDoApp = () => {

    const todoArr=useSelector(state=>state)
    console.log(todoArr);

    const [task,setTask]=useState('')
    const [updateTask,setUpdateTask]=useState("")

    const dispatch=useDispatch();

    function addTask  (e) {
        e.preventDefault();
        if(updateTask !==""){
           dispatch(updateTodo(updateTask,task))
           setUpdateTask("")
        }
        else{

        let task_obj={
            id:uuidv4(),
            title:task
        }

        dispatch(addTodo(task_obj))
      }
        setTask('')
    }

    function deleteTask(id){
        dispatch(deleteTodo(id))
    }

    // function updateTask(id) {

    // }

    return (

      <div>
        <h1>{updateTask==""?"ADD TODO":"UPDATE TODO"}</h1>
        <form onSubmit={addTask}>
        <input type="text" placeholder={updateTask==""?"ADD TODO":"UPDATE TODO"}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">{updateTask==""?"ADD TODO":"UPDATE TODO"}</button>


        </form>
        <ul>
        {

        todoArr.length>0 && todoArr.map((todo)=>(
         <li key={todo.id}>
            {todo.title}
            <button onClick={()=>{
              setUpdateTask(todo.id)
              setTask(todo.title)
            }}>U</button>
            <button onClick={()=>deleteTask(todo.id)}>D</button>
           
         </li>
        ))

        }
        </ul>

      </div>

    )
}

export default ToDoApp;