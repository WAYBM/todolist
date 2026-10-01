"use client"
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from 'react';
import "./page.css";
import TextArea from "./components/textarea";
export default function Home() {
  const [text, sett] = useState('')
  type Task = { title: string }
  const [tasks, setask] = useState<Task[]>([])
  const addtask = () => {
    if (text.length > 0) {
      setask((prev) => [...prev, { title: text }])
    }
    sett('')
  }
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <div className="min-h-100 w-1/4 flex flex-row mt-15">
        <div className="tasks flex items-start w-full flex-col">
          {tasks.map(c => (
            <div className="task flex-wrap flex flex-row w-full justify-around h-15 p-4 mt-1 text-white bg-blue-700/20 rounded-2xl transition-all  duration-200" key={tasks.indexOf(c) + 1}>
              <textarea className="relative resize-none focus:outline-none" readOnly value={`${tasks.indexOf(c) + 1}. ${c.title}`} />
              {/* <rect width='20' height='25'rx='5'/> */}
              <div className="flex flex-row">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"
                  className="w-6 h-6 text-gray-700 hover:text-blue-500 transition-colors cursor-pointer">

                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  <path d="M12 20h9" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
                  />
                  <line x1="10" y1="11" x2="10" y2="17" strokeLinecap="round" />
                  <line x1="14" y1="11" x2="14" y2="17" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-col w-full min-h-100">
        <label>Твоя первая задача</label>
        <div className="w-1/5 relative flex flex-row w-full items-center justify-center">
          <TextArea value={text} onChange={(e) => {
            sett(e.target.value)
          }}></TextArea>
          <button className="text-center text-blue-100 bg-blue-600 rounded-2xl px-4 py-2" onClick={addtask}>+</button>
        </div>
      </div>
    </div>
  );
}
