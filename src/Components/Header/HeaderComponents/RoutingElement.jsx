import React from 'react'
import { NavLink } from "react-router-dom"

function RoutingElem(props) {
    return (
        <NavLink to={props.reach} className={({ isActive }) => `${!isActive ?
            "text-gray-100" : "text-[#0ea5e9] "} text-[22px] 
            transition-all duration-500 ease-out 
            font-semibold hover:text-[#0ea5e9] ${props.className}`}>
            {props.name}</NavLink>

    )
}

export default RoutingElem