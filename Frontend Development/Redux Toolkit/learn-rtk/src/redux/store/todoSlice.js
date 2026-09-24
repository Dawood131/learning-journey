import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchTodo = createAsyncThunk('todos/fetechTodo', async () => {
    const response = await fetch('https://dummyjson.com/todos?_limit=5');
    const data = await response.json();
    return data.todos
})

export const addTodoAsync = createAsyncThunk('todos/addTodo', async (newTodo) => {
    const response = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo)
    })
    const data = await response.json()
    return data
})

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodo', async (todoId) => {
    await fetch(`https://dummyjson.com/todos/${todoId}`, {
        method: 'DELETE'
    })
    return todoId
})

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodo.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.todos = action.payload
                state.loading = false
            })
            .addCase(fetchTodo.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(addTodoAsync.pending, (state) => {
                state.loading = true
            })
            .addCase(addTodoAsync.fulfilled, (state, action) => {
                state.loading = false
                state.todos.push(action.payload)
            })
            .addCase(addTodoAsync.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(deleteTodoAsync.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteTodoAsync.fulfilled, (state, action) => {
                state.todos = state.todos.filter(i => i.id !== action.payload)
                state.loading = false
            })
            .addCase(deleteTodoAsync.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }

});

export default todoSlice.reducer