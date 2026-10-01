'use client'
import "./back.css";
import { useEffect, useState, useMemo } from "react";
function randomInt(min:number,max:number):number{
    return Math.random()*(max-min) + min
}
export default function Background(){
    const [size,setsize] = useState({width:0,height:0})
    useEffect(()=>{
        const resize=()=>{
            setsize({width:window.innerWidth,height:window.innerHeight})
        }
        window.addEventListener('resize',resize)
        resize()
        return ()=>  window.removeEventListener('resize',resize);
    },[])
    const circles = useMemo(
  () =>
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      cx: randomInt(0, size.width),
      cy: randomInt(0, size.height),
      tox: randomInt(0, size.width),
      toy:randomInt(0, size.height),
      dur:randomInt(2,6),

    })),
  [size.width, size.height]   // ← второй аргумент обязателен
);
    return (
        <div className="fixed background inset-0 -z-10 pointer-events-none">
            <svg className="w-full h-full blur-[80px]">
                        {size.width!=0 && circles.map(c=>(
                            <circle className="circle" fill="blue" key={c.id} cx={c.cx} cy={c.cy} r='45'>
                                <animate attributeName="cx"
                                    values={`${c.cx};${c.tox};${c.cx}`}
                                    dur='50s'
                                    repeatCount='indefinite'
                                />
                                <animate attributeName="cy"
                                    values={`${c.cy};${c.toy};${c.cy}`}
                                    dur='100s'
                                    repeatCount='indefinite'
                                />
                                
                            </circle>
                        ))}       
            </svg>
        </div>
    )
}