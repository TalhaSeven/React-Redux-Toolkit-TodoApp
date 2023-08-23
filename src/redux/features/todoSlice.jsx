import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo : (state,action) => {
        state.todoList = [
            ...state.todoList,{
                id: new Date().getTime(),
                text: action.payload,
                completed: false,
            }
        ]
    },
    deleteTodo :(state , action ) =>{
        state.todoList = state.todoList.filter((item)=> item.id !== action.payload);
    },
    toggleComplete:(state,action)=>{
        state.todoList = state.todoList.map((item) => item.id === action.payload ? {
            ...item,completed : !item.completed
        } : item )
    },
    clearTodo : (state) => {
        state.todoList = []
    }
  }
});

export const {addTodo, deleteTodo, toggleComplete, clearTodo} = todoSlice.actions

export default todoSlice.reducer
