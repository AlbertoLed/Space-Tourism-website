import { useParams, NavLink } from "react-router-dom"
import { technologies } from "../../data"

export default function Technology() {
    const params = useParams()
    const data = technologies.filter(item => item.id === parseInt(params?.id || "0"))[0]

    const bgImg = "bg-[url('./assets/technology/background-technology-mobile.jpg')]"

    return(
        <section className={`${bgImg} min-h-[100vh] bg-cover text-text grid content-center pt-[60px]`}>
            <div className="flex flex-col space-y-[30px]">
                <h1 className="text-primary font-barlow-con uppercase text-lg tracking-widest mx-auto"><span className="text-secondary font-bold">03</span> Space launch 101</h1>
                <div>
                    <img src={data.images.landscape} alt="i"
                    className="mb-9" />
                    <div className="space-y-6">
                        <nav className="flex space-x-3 justify-center">
                            <NavLink to="../1" relative="path"
                            className={({isActive}) => `w-10 aspect-square border-2 rounded-full grid place-content-center transition-colors ${isActive ? `border-primary bg-primary text-accent` : `border-secondary hover:border-primary`}`}>1</NavLink>
                            <NavLink to="../2" relative="path"
                            className={({isActive}) => `w-10 aspect-square border-2 rounded-full grid place-content-center transition-colors ${isActive ? `border-primary bg-primary text-accent` : `border-secondary hover:border-primary`}`}>2</NavLink>
                            <NavLink to="../3" relative="path"
                            className={({isActive}) => `w-10 aspect-square border-2 rounded-full grid place-content-center transition-colors ${isActive ? `border-primary bg-primary text-accent` : `border-secondary hover:border-primary`}`}>3</NavLink>
                        </nav>
                        <div className="w-[90%] mx-auto">
                            <p className="font-barlow-con tracking-widest uppercase text-center text-sm mb-1">The terminology...</p>
                            <h2 className="font-bellefair text-primary text-center text-2xl uppercase mb-4">{data.name}</h2>    
                            <p className="text-sm leading-7 text-center text-pretty">{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}