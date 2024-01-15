// import { useEffect } from "react"
import { useLocation, Outlet } from "react-router-dom"

export default function Crew() {
    const location = useLocation()
    console.log(location)

    const bgImg = "bg-[url('./assets/crew/background-crew-mobile.jpg')]"

    return(
        <section className={`${bgImg} min-h-[100vh] bg-cover text-text grid content-center pt-[60px]`}>
            <h1><span>02</span>Meet your crew</h1>
            <div className="flex space-x-4">
                <div className="w-5 h-5 bg-slate-500 rounded-full hover:cursor-pointer"></div>
                <div className="w-5 h-5 bg-slate-500 rounded-full hover:cursor-pointer"></div>
                <div className="w-5 h-5 bg-slate-500 rounded-full hover:cursor-pointer"></div>
                <div className="w-5 h-5 bg-slate-500 rounded-full hover:cursor-pointer"></div>
            </div>
            <Outlet />
        </section>
    )
}