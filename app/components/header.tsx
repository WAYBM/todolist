'use client'
import {useState} from 'react';
import Image from 'next/image'
export default function Header(){
    const [dark,setdark] = useState(false)
    return(
        <header className="fixed h-10vh w-full flex justify-center z-1000">
            <div className='flex max-w-1280 mt-2 justify-around flex-row w-4/5'>
                <Image width={50} height={50} alt='logo' src='/logo.png'/>
                <div className='flex flex-row justify-around w-40 items-center'>
                <div className='text-center'>TodoList</div>
                <div className='flex flex-row'>
                    <div className='relative w-auto h-[5vh]'>
                        <svg className='absolute' height='5vh'width='10vh'>
                            <rect height='17' width='30' y='13.7' x='24.5' ry='10' fill='#4492c1'/>
                            <circle className='transition-all duration-250' r='6' cy='22' cx='33' fill='white' style={{transform:`translate(${dark ? 13:0}px)`}}/>
                        </svg>
                        <button className='absolute w-full h-full' onClick={()=>{
                            console.log('cock')
                            dark ? setdark(false):setdark(true)
                            }}></button>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}