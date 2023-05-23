import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import { Dispatch } from 'react';

import {useTaskListContext} from "../hooks/useTaskListContext"

function Create() {

    const [name, setName] = useState("");
    //const [taskList, setTaskList] = useState([])
  const {taskList,dispatch}=useTaskListContext()
   
    

    async function onSubmit() {
     
        console.log(name)
        await axios.post('http://localhost:3001/api', 
           {taskName: name, 
           });
           axios.get('http://localhost:3001/api').then((response) => {
            setName('')
            dispatch({type:'CREATE_TASK',payload:response.data});
         });
    }

    useEffect(()=>{
      
      const getData=async()=>{axios.get('http://localhost:3001/api').then((response) => {
        dispatch({type:'SET_TASKLIST',payload:response.data});
     });}
     getData();
     
  }, [dispatch]);
  

   function onDelete(id,e){
   
   axios.delete(`http://localhost:3001/api/${id}`)
   .then((res)=>{dispatch({type:'DELETE_TASK',payload:res.data});
  })
  }


  return (
    <>
    <div>create</div>
    <form onSubmit={onSubmit}>
      <label>Enter your name:
        <input  type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </label>
      <button type='submit' >Show Task</button>
    </form>
    {taskList && taskList.map((item) => {
      return(
        <div className='tasks'>
          <p key={item._id}>{item.taskName}</p>
          <button onClick={(e)=>{onDelete(item._id,e)}} >Delete</button>

        </div>
         
      )
    })}
   <p>Test under</p>
    </>
  )
}

export default Create