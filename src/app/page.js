"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, { title, content }])
    setTitle("")
    setContent("")
  }
  const deleteHandler=(id)=>{
    
    const result= task.filter((d,i)=>i!=id)
   
    setTask(result)
  }
  return (
    <>
      <h2 className="bg-black text-white text-center text-2xl font-bold">Rohit Todo </h2>
      <form onSubmit={submitHandler} className="py-5 px-5 my-5 text-center">
        <input type="text" value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          className="py-2 px-2 border-black text-xl border-2 mx-2 my-2" />
        <input type="text" value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter descriptions"
          className="border-black text-xl py-2 px-2 border-2" />
        <button className="bg-black rounded px-4 py-3 text-white mx-5">Add Todo</button>
      </form>

      {task.map((data, i) => {
        return (
          <>
            <ul className="shadow-md mx-20 my-5 p-2 text-xl">
              <li className="text-bold">{data.title}</li>
              <li>{data.content}</li>
              <button className="border-2 p-2" onClick={()=> deleteHandler(i) }>Delete</button>
            </ul>

          </>
        )
      }
      )}
    </>
  );
}
