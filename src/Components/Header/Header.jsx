import React, { useState, useEffect } from 'react'
import Logo from './HeaderComponents/Logo'
import { ResponsiveBtn, RoutingElem } from "../../index"

function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 960);
    const [displayNav, setdisplayNav] = useState(false);
    const NavClassName = "text-center"

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth < 960);
        });
    }, []);

    return (
        <div className='w-auto right-[20px] left-[20px] top-[10px] md:px-[100px] px-[30px] py-[10px] flex 
        flex-row justify-between items-center
        shadow-lg absolute z-50 '>
            <Logo />
            <div className='relative'>
                {!isMobile && <div className='flex 2xl:gap-[30px] gap-[30px] justify-center items-center'>
                    <RoutingElem reach="/" name="Home" />
                    <RoutingElem reach="/projects" name="Projects" />
                    <RoutingElem reach="/Faqs" name="FAQs" />
                    <RoutingElem reach="/Login" name="Login" />

                </div>}
                {isMobile && <div className='relative'>
                    <ResponsiveBtn onClick={() => { setdisplayNav(!displayNav) }} />
                    {displayNav && <div className='w-[120px] h-[250px] flex flex-col absolute right-4 pt-[12px]
                    justify-between items-center border-sky-500 border-2 gap-[4px] backdrop-blur-[20px] rounded-xl mt-8'>
                        <RoutingElem reach="/" name="Home" className={NavClassName} />
                        <RoutingElem reach="/projects" name="Projects" className={NavClassName} />
                        <RoutingElem reach="/Faqs" name="FAQs" className={NavClassName} />
                        <RoutingElem reach="/Login" name="Login" className={NavClassName} />


                    </div>}
                </div>}
            </div>
        </div>
    )
}

export default Header