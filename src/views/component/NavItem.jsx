import React from 'react'
import {Link} from "react-router-dom"
export default function NavItem({logo,title,to,className,onClick}) {
    return (
        <li className={className} onClick={onClick}>
           <Link to={to}>
           <img src={logo}  />
           <h4>{title}</h4>
           <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L15 12L1 23" stroke="#A7A7A7" stroke-width="2"/>
            </svg>

           </Link> 
        </li>
    )
}
