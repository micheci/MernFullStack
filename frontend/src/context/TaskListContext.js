import { createContext, useReducer } from "react";

export const TaskListContext=createContext()

export const taskListReducer=(state,action)=>{
    switch(action.type){
        case 'SET_TASKLIST':
            return {
                taskList:action.payload
            }
        case 'CREATE_TASK':
            return {
                taskList:[action.payload,...state.taskList]
            }
        case 'DELETE_TASK':
            return{
                taskList:state.taskList.filter((w)=>w._id !==action.payload._id)
            }
            default:
                return state
    }
}

export const TaskListContextProvider=({children})=>{
    const [state,dispatch]=useReducer(taskListReducer,{
        taskList:null
    })

    return(
        <TaskListContext.Provider value={{...state,dispatch}}>
            {children}
        </TaskListContext.Provider>
    )
}  