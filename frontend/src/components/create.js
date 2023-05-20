import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'

function Create() {

    const [name, setName] = useState("");
    const [taskList, setTaskList] = useState([])
   
    function onSubmit(e) {
      e.preventDefault(e)
        console.log(name)
        axios.post('http://localhost:3001/api', 
           {taskName: name, 
           });
    }
    useEffect(()=>{
      
      axios.get('http://localhost:3001/api').then((response) => {
        setTaskList(response.data);
     });
  }, []);

  function onDelete(id,e){
    e.preventDefault();
   axios.delete(`http://localhost:3001/api/${id}`)
   .then(res=>console.log('deleted'))
  }


  return (
    <>
    <div>create</div>
    <form>
      <label>Enter your name:
        <input  type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </label>
      <button type='submit' onClick={onSubmit}>Show Task</button>
    </form>
    {taskList.map((item) => {
       return (
          <ul  key={item._id}>
             <li >{item._id}{item.taskName}
             </li> 
             <button onClick={(e)=>{onDelete(item._id,e)}} ></button>
            
          </ul>
       );
    })}
    {/* <form>
     <button onClick={onDelete}>Dealete</button>
    </form> */}
    </>
  )
}

export default Create