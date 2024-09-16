"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  function delete_todo(index: number) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    window.localStorage.setItem("listen", JSON.stringify(updatedTodos));
  }

  useEffect(() => {
    const storedValue: string | null = window.localStorage.getItem("listen");

    if (storedValue) {
      try {
        const parsedValue = JSON.parse(storedValue);

        if (Array.isArray(parsedValue)) {
          setTodos(parsedValue);
        } else {
          setTodos(storedValue.split(","));
        }
      } catch (e) {
        setTodos(storedValue.split(","));
      }
    } else {
      setTodos([]);
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (todo.trim()) {
        const newTodos = [...todos, todo.trim()];
        setTodos(newTodos);
        window.localStorage.setItem("listen", JSON.stringify(newTodos));
        setTodo("");
      }
    }
  };

  const handleButtonClick = () => {
    if (todo.trim()) {
      const newTodos = [...todos, todo.trim()];
      setTodos(newTodos);
      window.localStorage.setItem("listen", JSON.stringify(newTodos));
      setTodo("");
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-[50px]">Todo</h1>
        <div className="flex flex-row">
          <Input
            className="border-black border-2 tracking-wider"
            type="text"
            placeholder="Todos"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button variant="default" onClick={handleButtonClick}>
            Add Todo
          </Button>
        </div>
        <ul className="list-none py-8 text-8">
          {todos.map((item, index) => (
            <li
              className="hover:line-through"
              key={index}
              onClick={() => delete_todo(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
