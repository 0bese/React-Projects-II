import React from "react";
import { useSelector } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => {
        return (
          <li
            className=",t-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded my-3"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
}

export default Todos;
