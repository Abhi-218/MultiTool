import { createContext,useContext } from "react"


export const Todocontext = createContext({
     todos : [{
          id : "",
          todo  : '',
          completed : false ,
     }],
     addTodo : (todo)=>{},
     updateTodo : (id,todo)=>{},
     deleteTodo : (id)=>{},
     toggleComplate : (id)=>{}
 })

 export const useTodo = ()=>{
    return useContext(Todocontext)
 }

 export const TodoProvider = Todocontext.Provider