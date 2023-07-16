import React, { useState } from "react";
import { PopupDelete } from "./PopupDelete";

export const Todo = ({ tasks, editTodo, toggleComplete, todos, setTodos }) => {
  const [openDelete, setOpenDelete] = useState(false);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="flex items-center justify-center mt-5 border-b ">
      <p
        onClick={() => toggleComplete(tasks.id)}
        className={`${tasks.completed ? "text-slate-900 font-bold fa-solid fa-check flex justify-between tracking-widest transition gap-2 translate-x-[-20px]  border-r " : "transition translate-x-[0]"} px-5 font-semibold text-zinc-100 cursor-pointer w-full whitespace-normal overflow-hidden py-2`}
      >
         {tasks.input}  
      </p>

      <div className="w-[120px] py-2 rounded-md font-bold text-zinc-100 cursor-pointer flex items-center justify-evenly ">
        <i
          onClick={() => editTodo(tasks.id)}
          className="fa-solid fa-pen-to-square bg-purple-600 p-2 rounded-md"
        ></i>
        <span className="">
          <i
            onClick={() => setOpenDelete(true)}
            className="fa-solid fa-trash bg-purple-600 p-2 rounded-md "
          ></i>
          {openDelete && (
            <div className={``}><PopupDelete tasks={tasks} deleteItem={deleteTodo} cancel = {setOpenDelete} /></div>
          )}
        </span>
      </div>
    </div>
  );
};
