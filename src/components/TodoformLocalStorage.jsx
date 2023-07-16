import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const Todoform = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || []
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), input: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (input, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, input, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <section className="m-auto sm:w-[80%] xl:w-[40%] bg-gray-700 px-5 py-5 rounded-md z-40">
      <div className="py-5 border-b">
        <h1 className="text-4xl text-white font-semibold text-center font-[Shrikhand] tracking-widest   ">
          My Day ...
        </h1>
      </div>

      <Form addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} tasks={todo} key={index} />
        ) : (
          <Todo
            setTodos={setTodos}
            todos={todos}
            tasks={todo}
            key={index}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        )
      )}
    </section>
  );
};
