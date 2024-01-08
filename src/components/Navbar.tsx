import { useState } from "react"
import { Outlet } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import logo from "../../public/logo.svg"

export default function Navbar() {
    const [showNav, toggleShowNav] = useState(false)
    return(
        <>
                <div className="absolute w-full">
                    <div className="flex w-full items-center justify-between">
                        <img src={logo} alt="Logo" />
                        <FaBars
                        className="text-4xl hover:cursor-pointer"
                          onClick={() => toggleShowNav(prev => !prev)}
                        />
                    </div>
                        {showNav ? 
                            <nav>This is the navbar</nav>
                            : null
                        }
                </div>
            <Outlet />
        </>
    )
}