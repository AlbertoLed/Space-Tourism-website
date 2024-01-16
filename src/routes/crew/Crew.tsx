// import { useEffect } from "react"
import { useLocation, Outlet, useNavigate } from "react-router-dom"

export default function Crew() {

    const bgImg = "bg-[url('./assets/crew/background-crew-mobile.jpg')]"

    return(
        <section className={`${bgImg} min-h-[100vh] bg-cover text-text grid content-center pt-[60px]`}>
            <h1><span>02</span>Meet your crew</h1>
            <div className="flex space-x-4">
                <NavDot to="." />
                <NavDot to="mark" />
                <NavDot to="victor" />
                <NavDot to="anousheh" />
            </div>
            <Outlet />
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
            className={`w-5 h-5 rounded-full hover:cursor-pointer ${style ? 'bg-white' : 'bg-slate-500'}`}
            onClick={() => navigateTo(to)}>
        </div>
    )
}