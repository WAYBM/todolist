'use client'
import {useState,useEffect,useRef, TextareaHTMLAttributes, HtmlHTMLAttributes} from "react";
type textareaprops = TextareaHTMLAttributes<HTMLTextAreaElement>
export default function TextArea(props:textareaprops){
    const text = useRef<HTMLTextAreaElement>(null)
    const resize = ()=>{
        const el = text.current
        if(!el) return
        el.style.height = 'auto'
        el.style.height = el.scrollHeight +'px'
    }
    useEffect(resize,[props.value])
    return(
        <textarea {...props} minLength={1} ref={text} onInput={resize} rows={1}
        className='overflow-hidden resize-none mainIn min-h-[40px] border-white rounded-2xl w-1/5 bg-gray-500/10 px-4 py-2 focus:outline-none focus:border-blue-200 transition-all duration-300' id='task' placeholder="Давай пиши чо ждешь"/>
    );
}