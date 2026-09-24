import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAsync,
  deleteTodoAsync,
  fetchTodo,
} from "./redux/store/todoSlice";
import Practice from './Practice'
import Counter from "./Counter";

export default function TodoApp() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error)

  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoUserId, setNewTodoUserId] = useState("")

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleAdd = () => {
    if (!newTodoTitle.trim()) return
    dispatch(addTodoAsync({ todo: newTodoTitle, completed: false, userId: newTodoUserId }))
    setNewTodoTitle("")
    setNewTodoUserId("")
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center py-12 px-4">

      {/* <Practice name="Muhammad Dawood Butt" role="Frontend Developer" /> */}
      <Counter />
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">
          Redux Todo App
        </h1>

        {/* Input */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Enter your todo..."
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="number"
            placeholder="Enter userId"
            value={newTodoUserId}
            onChange={(e) => setNewTodoUserId(Number(e.target.value))}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

          <button
            onClick={handleAdd}
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
          >
            Add Todo
          </button>
        </div>

        {loading && (
          <p className="text-center text-violet-600 font-semibold mb-5">
            Loading...
          </p>
        )}
        {error && (
          <p className="text-center text-violet-600 font-semibold mb-5">
            {error}
          </p>
        )}

        {/* Todos */}
        <div className="space-y-5">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-lg transition"
            >
              <div>
                <span className="inline-block bg-violet-100 text-violet-700 text-sm px-3 py-1 rounded-full mb-3">
                  User #{todo.userId}
                </span>

                <h2 className="text-xl font-semibold text-slate-800">
                  {todo.todo}
                </h2>
                <h3 className="text-xl font-semibold text-slate-800">
                  {todo.completed}
                </h3>
              </div>

              <button
                onClick={() => dispatch(deleteTodoAsync(todo.id))}
                className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}