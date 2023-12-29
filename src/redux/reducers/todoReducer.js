import { ADD_TODO,DELETE_TODO,UPDATE_TODO } from "../actions/actionType";

const initialState=[]

const todoReducer = (state=initialState , action) => {

    switch(action.type) {
        case ADD_TODO: return[...state,action.payload]

        case DELETE_TODO: 
        return state.filter(todo => todo.id!==action.payload)

        case UPDATE_TODO:
            let newArr=[]
            for(let t of state){

                if(t.id!==action.updateId){
                    newArr.push(t)
                }
                else if(t.id==action.updateId){
                    t.title=action.updateTitle
                    newArr.push(t)
                }
            }
            return newArr

        default : return state;
    }
}

export default todoReducer;