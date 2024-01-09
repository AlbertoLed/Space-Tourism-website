export default function Home() {

    const bgImg = "bg-[url('./assets/home/background-home-mobile.jpg')]"

    return(
        <header className={`${bgImg} min-h-[100vh] bg-cover text-text grid content-center pt-[60px]`}>
            <div className="w-[90%] mx-auto flex flex-col space-y-[80px]">
                <div className="grid justify-items-center space-y-7">
                    <p className="font-barlow-con uppercase text-lg tracking-widest">So, you want to travel to</p>
                    <h1 className="text-primary font-bellefair uppercase text-7xl">Space</h1>
                    <p className="font-barlow text-center text-pretty">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <button className="bg-primary text-accent text-xl tracking-wider font-bellefair uppercase mx-auto w-[150px] h-[150px] rounded-full">Explore</button>
            </div>
        </header>
    )
}