import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./taskTypes";

export const addTask = (item) => ({
    type : ADD_TASK,
    payload: item
});

export const deleteTask = (id) => ({
    type : DELETE_TASK,
    payload : id
});

export const updateTask = (item, id) => ({
    type : UPDATE_TASK,
    payload: {id, item}
})