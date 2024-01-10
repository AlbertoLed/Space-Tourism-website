import { useState } from "react"
import { Outlet, NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import logo from "../../public/logo.svg"

export default function Navbar() {
    const [showNav, toggleShowNav] = useState(false)
    return(
        <>
                <div className="absolute w-[90%] left-[5%] top-6">
                    <div className="flex w-full items-center justify-between">
                        <img src={logo} alt="Logo"
                        className="w-[40px]" />
                        <FaBars
                        className="text-text text-3xl hover:cursor-pointer"
                          onClick={() => toggleShowNav(prev => !prev)}
                        />
                    </div>
                        {showNav ? 
                            <nav className="text-text">
                                <NavLink to="."><span>00</span> Home</NavLink>
                                <NavLink to="destination"><span>01</span> Destination</NavLink>
                                <NavLink to="crew"><span>02</span> Crew</NavLink>
                                <NavLink to="technology"><span>03</span> Technology</NavLink>
                            </nav>
                            : null
                        }
                </div>
            <Outlet />
        </>
    )
}