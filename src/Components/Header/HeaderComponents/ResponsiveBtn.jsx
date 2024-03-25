import React from 'react'
import { PiDotsNineBold } from "react-icons/pi";

function ResponsiveBtn({ ...props }) {
    return (
        <PiDotsNineBold
            {...props}
            className='w-[48px] lg:flex-col h-auto hover:text-sky-500 cursor-pointer hover:scale-105 pl-[16px] pr-[2px]' />
    )
}

export default ResponsiveBtn