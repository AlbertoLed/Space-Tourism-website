import { NavLink, Outlet } from "react-router-dom"

export default function Destination() {

    const bgImg = "bg-[url(./assets/destination/background-destination-mobile.jpg)]"

    return(
        <main className={`${bgImg} min-h-[100vh] bg-cover text-text grid content-center pt-[100px] pb-[50px]`}>
            <div className="w-[90%] mx-auto flex flex-col space-y-[30px]">
                <h1 className="text-primary font-barlow-con uppercase text-lg tracking-widest mx-auto"><span className="text-secondary font-bold">01</span> Pick your destination</h1>
                <div className="flex flex-col">
                    <nav className="space-x-7 uppercase font-barlow-con order-2 tracking-widest mt-[30px] mb-[40px] mx-auto">
                        <NavElement 
                            to="."
                        >Moon</NavElement>
                        <NavElement 
                            to="mars"
                        >Mars</NavElement>
                        <NavElement 
                            to="europa"
                        >Europa</NavElement>
                        <NavElement 
                            to="titan"
                        >Titan</NavElement>
                    </nav>
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

function NavElement(props: {to: string, children: string}) {
    const {to, children} = props
    const selectedStyles = "text-primary before:scale-x-100"
    const styles = "hover:text-primary transition-colors relative before:content-[''] before:absolute before:w-full before:h-1 before:bg-primary before:left-0 before:top-8 before:transition-transform before:scale-x-0"
    return(
        <NavLink className={({isActive}) => isActive ? `${selectedStyles} ${styles}` : styles}
        to={to} end>{children}</NavLink>
    )
}