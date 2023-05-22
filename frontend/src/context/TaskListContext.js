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