import { useEffect, useState } from "react";
import type { Todo, Todos } from "../types/todo";

export function useTodos() {
  const [todos, setTodos] = useState<Todos>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = import.meta.env.VITE_TODOLIST_URL;
    setIsLoading(true);

    fetch(url, {
      headers: { "Content-type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => {
        setIsLoading(false);
        setTodos(data);
      });
    // .then(setTodos);
  }, []);

  function deleteTodo(todo: Todo) {
    setIsLoading(true);
    const url = `${import.meta.env.VITE_TODOLIST_URL}/${todo.id}`;

    fetch(url, {
      headers: { "Content-type": "application/json" },
      method: "DELETE",
    }).then(() => {
      setIsLoading(false);
      const all_todos = todos.filter((t) => t.id !== todo.id);
      setTodos(all_todos);
    });
  }

  function saveTodo(todo: Todo) {
    setIsLoading(true);
    const url = import.meta.env.VITE_TODOLIST_URL;
    fetch(url, {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(todo),
    })
      .then((data) => data.json())
      .then((data) => {
        setIsLoading(false);
        setTodos([...todos, data]);
      });
  }

  return { todos, setTodos, deleteTodo, saveTodo, isLoading };
}
