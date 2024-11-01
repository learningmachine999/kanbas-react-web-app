import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(
) {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button onClick={() => dispatch(addTodo(todo))}>
        Add </button>
      <button onClick={() => dispatch(updateTodo(todo))}>
        Update </button>
      <input defaultValue={todo.title} onChange={
        (e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
    </li>);}