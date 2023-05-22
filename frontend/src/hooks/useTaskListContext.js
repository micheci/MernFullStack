import { TaskListContext } from "../context/TaskListContext";
import { useContext } from "react";

export const useTaskListContext=()=>{
    const context=useContext(TaskListContext)

    if(!context){
        throw Error('useWOrkors must be used inside rotues stuff')
    }

    return context
}