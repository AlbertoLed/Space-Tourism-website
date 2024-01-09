import { useState } from "react"
import { Outlet } from "react-router-dom"
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
                            <nav>This is the navbar</nav>
                            : null
                        }
                </div>
            <Outlet />
        </>
    )
}