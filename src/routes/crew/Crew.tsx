// import { useEffect } from "react"
import { useLocation, Outlet, useNavigate } from "react-router-dom"

export default function Crew() {

    const bgImg = "bg-[url('./assets/crew/background-crew-mobile.jpg')]"

    return(
        <section className={`${bgImg} min-h-[100vh] bg-cover text-text grid content-center pt-[60px]`}>
            <div className="w-[90%] mx-auto flex flex-col space-y-[30px]">
                <h1 className="text-primary font-barlow-con uppercase text-lg tracking-widest mx-auto"><span className="text-secondary font-bold">02</span> Meet your crew</h1>
                <div className="flex space-x-4 order-2 mx-auto">
                    <NavDot to="." />
                    <NavDot to="mark" />
                    <NavDot to="victor" />
                    <NavDot to="anousheh" />
                </div>
                <Outlet />
            </div>
        </section>
    )
}

function NavDot(props: {to: string}) {
    const { to } = props
    const location = useLocation()
    const navigate = useNavigate()
    const navigateTo = (path: string) => navigate(path)
    const style = location.pathname.includes(to) || to === "." && !location.pathname.includes("crew/")
    return(
        <div 
            className={`w-3 h-3 rounded-full hover:cursor-pointer ${style ? 'bg-primary' : 'bg-secondary'}`}
            onClick={() => navigateTo(to)}>
        </div>
    )
}