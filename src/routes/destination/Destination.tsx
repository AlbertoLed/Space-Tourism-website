import { NavLink, Outlet } from "react-router-dom"

export default function Destination() {

    const bgImg = "bg-[url(./assets/destination/background-destination-mobile.jpg)]"

    return(
        <main className={`${bgImg} min-h-[100vh] bg-cover text-text grid content-center pt-[60px]`}>
            <div className="w-[90%] mx-auto flex flex-col space-y-[80px]">
                <h1 className="text-primary font-barlow-con uppercase text-lg tracking-widest mx-auto"><span>01</span> Pick your destination</h1>
                <div>
                    <nav className="space-x-7 uppercase font-barlow-con">
                        <NavLink 
                            to="."
                            className="hover:text-primary"
                        >Moon</NavLink>
                        <NavLink 
                            to="mars"
                            className="hover:text-primary"
                        >Mars</NavLink>
                        <NavLink 
                            to="europa"
                            className="hover:text-primary"
                        >Europa</NavLink>
                        <NavLink 
                            to="titan"
                            className="hover:text-primary"
                        >Titan</NavLink>
                    </nav>
                    <Outlet />
                </div>
            </div>
        </main>
    )
}