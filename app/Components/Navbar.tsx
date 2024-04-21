'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Pacifico, Poppins } from 'next/font/google'

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })
const poppin = Poppins({ subsets: ['latin'], weight: ['400', '500', '300', '600'] })
const Navbar = () => {
    const [nav, setNav] = useState<Boolean>(false)
    return (
        <header className=' h-[17vh] w-screen relative top-0 left-0 pt-6 pr-5'>
            <div className='w-full h-[9vh]  flex justify-around relative mt-5  items-end'>
                <div className='w-[20%] h-full relative flex items-center justify-center transition duration-1000'>
                    <div className='w-[115px] h-full absolute left-0 overflow-hidden mt-6  ml-24'>
                    <h1 className={`text-[26px] letter w-full flex-center font-cursive  ${poppin.className} absolute left-0`}>
                        <span className={`${pacifico.className} flex-center bg-[#f5f5f5ed] text-[#050505] rounded-full h-[40px] w-[40px] mr-1 transition duration-1000`}>
                            R
                        </span>
                       <span className=' animation-full transition-all duration-700 pt-1 h-10'>
                            ahul
                        </span>
                    </h1>
                    </div>
                </div>
                <nav className='w-[60%] h-full relative'>
                    <ul className='flex items-center justify-evenly w-full h-full uppercase mt-1'>
                        <div className={` absolute right-0 ${nav ? "w-full" : "w-11"} h-[45px] p-2 rounded-full ${nav ? "flex-all" : "flex-bet"} transition-all duration-700  bg-[#0f0f0f]`}>
                            <div className={`h-full w-[95%] flex-all overflow-hidden text-sm`}>
                                {
                                    nav &&
                                    <>
                                        <Link href="/">Home</Link>
                                        <Link href="/#about">About</Link>
                                        <Link href="/#projects">Projects</Link>
                                        <Link href="/#contact">Contact</Link>
                                    </>
                                }
                            </div>
                            <div className='h-[30px] w-[30px] rounded-full flex-center absolute right-2 bg-[#050505]' onClick={() => setNav(!nav)}>
                                {nav ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
