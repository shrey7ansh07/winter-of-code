import React, { useEffect, useRef } from 'react'
import bgVideo from "/Bgcomponents/test1.jpeg"
import Logo from '../Header/HeaderComponents/Logo';

function Top() {
    

    let date = new Date
    let year = date.getFullYear()

    return (
        <div className=' md:h-[700px] h-[500px] relative flex justify-center items-center'>
            {/* <video
                ref={videoRef}
                autoPlay="autoplay"
                loop="loop"
                muted
                className='absolute w-full md:h-[700px] h-[500px] object-cover shadow-md shadow-sky-500 z-[-10]'>
                <source src={bgVideo} type="video/mp4" />
            </video> */}
            {/* <img
                src={bgVideo}   
                className='absolute w-full md:h-[700px] h-[500px] object-cover shadow-md shadow-sky-500 z-[-10]'
                alt="" /> */}
            <div className='flex flex-col justify-center items-center nd:gap-[30px] gap-[20px] '>
                {/* <Logo className='md:w-[160px] w-[140px]' /> */}
                <div className='font-fontDefault text-animation text-gray-200  mt-56 2xl:text-7xl lg:text-5xl md:text-3xl text-7xl text-center font-bold block'>
                    
                    Mandi Winter of Code {year}
                </div>
                <div className='text-center font-fontDefault font-medium 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-1xl text-4xl'>Dive into the world of open source</div>
            </div>
        </div>
    )
}

export default Top