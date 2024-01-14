import React from 'react'
import { poppin, rburned, rubik, vinyl } from '../constants'
import web1 from '@/public/web1.jpg'
import Image from 'next/image'
const Home = () => {
  return (
    <section className=' min-h-[85vh] w-full relative flex-center'>
      <div className=" w-[60%] min-h-[80vh] relative">
        <div className='w-[82%]  min-h-[80vh] absolute right-0 top-0 flex-center'>
          <div className="w-full relative h-[60vh]  flex-center flex-col">
            <div className='w-[100%] h-[65%] -mt-8'>
              <div className="w-full flex space">
                <h3 className={`text-7xl mr-9 ${rubik.className} font-extralight text-[#f5f5f5e8]`}>HELLO </h3>
                <span className={`text-7xl font-light textColor ${vinyl.className} `}> I{'\u0027'}M</span>
                <span className='text-7xl font-medium  ml-5'>A</span>
              </div>
              <div className='animate-colorfill w-full relative mb-20 mt-14'>
                <h3 className={`text-[7rem] font-semibold leading-10  relative stack shadow`}>FULL STACK</h3>
              </div>
              <div className='w-full relative'>
                <span className={`text-7xl font-light textColor leading-10 italic ${vinyl.className}`}>DEVELOPER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[40%] min-h-[80vh] relative flex-center">
        <div className='h-[50vh] w-full relative border border-red-500 flex-center'>
            {/* <Image src={web1} alt="developer img" className= ''/> */}
            <div className='w-[60%] h-full rounded-tl-[34%] rounded-tr-[66%] rounded-br-[50%] rounded-bl-[52%] sm:rounded-bl-[60%] sm:rounded-br-[51%] md:rounded-tr-[49%] lg:rounded-tl-[40%] bg-[#2a2f3f91]'>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Home

