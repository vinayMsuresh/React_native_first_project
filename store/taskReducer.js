import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./taskTypes";

const initialState = {
    todos:[]
}

const taskReducer = (state = initialState, actions) => {
    switch(actions.type){
        case ADD_TASK:
            return{
                ...state,
                todos:[...state.todos, actions.payload]
            }
        
        case DELETE_TASK:
            return{
                ...state,
                todos: state.todos.filter(itm => itm.id !== actions.payload)
            }
        case UPDATE_TASK:
            return{
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id !== actions.payload.id){
                        return item
                    }
                    return actions.payload.item
                })
            }
            break;
        default: return state;
    }
}

export default taskReducer;