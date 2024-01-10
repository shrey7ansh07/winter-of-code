import React from 'react'
import { PiDotsNineBold } from "react-icons/pi";

function ResponsiveBtn({ ...props }) {
    return (
        <PiDotsNineBold
            {...props}
            className='w-[40px] h-auto hover:text-sky-500 cursor-pointer hover:scale-105' />
    )
}

export default ResponsiveBtn