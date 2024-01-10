import React from 'react'
import logo from "/Logo/IitMandi.png"
function Logo({ className = "w-[120px]" }) {
    return (
        <img
            className={`${className} aspect-square`}
            src={logo}
            alt="iit mandi logo" />
    )
}

export default Logo