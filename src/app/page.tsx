'use client'
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);



  function delete_todo(index : number) {
    const updatedTodos = todos.filter((_, i) => i !== index); // Filter out the todo by index
    setTodos(updatedTodos)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (todo.trim()) {
        setTodos([...todos, todo.trim()]);
        setTodo("");
      }
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
          onKeyDown={handleKeyDown} />
        <Button variant="default" onClick={() => { if (todo!="") {
           setTodos([
            ...todos,
            todo
          ]);
          {setTodo("")}
        }
        }
       }>Button</Button>

        </div>
        <ul className="list-none py-8 text-8">
          {todos.map((item, index) => <li className="hover:line-through" key={index} onClick={() => delete_todo(index)}>{item}</li> )}
        </ul>
      </div>
        
    </>
  );
}
