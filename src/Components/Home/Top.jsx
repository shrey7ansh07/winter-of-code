import React, { useEffect, useRef } from 'react'
import bgVideo from "/Bgcomponents/test1.jpeg"
import Logo from '../Header/HeaderComponents/Logo';

function Top() {
    const videoRef = useRef(null)
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.70;
        }
    }, []);

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
            <div className='flex flex-col justify-center items-center nd:gap-[30px] gap-[20px]'>
                <Logo className='md:w-[160px] w-[140px]' />
                <div className='text-animation text-gray-200 md:text-7xl text-3xl text-center font-bold block'>
                    Mandi Winter of Code {year}
                </div>
                <div className='text-center font-medium md:text-[35px]'>Dive into the world of open source</div>
            </div>
        </div>
    )
}

export default Top