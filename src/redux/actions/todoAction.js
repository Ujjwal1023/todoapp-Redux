import { ADD_TODO ,DELETE_TODO,UPDATE_TODO } from "./actionType";

export const addTodo = (todo) => {
    return{
          type:ADD_TODO,
          payload:todo
    }
}

export const deleteTodo = (id) => {
    return{
          type:DELETE_TODO,
          payload:id
    }
}
export const updateTodo = (id,updateTitle) => {
    return{
          type:UPDATE_TODO,
          updateId:id,
          updateTitle:updateTitle
    }
}
