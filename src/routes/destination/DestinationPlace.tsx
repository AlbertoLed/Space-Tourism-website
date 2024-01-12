import { Destination } from "../../utils"

export default function DestinationPlace(props: {place: Destination}) {
    const {name, description, distance, travel, image} = props.place
    return(
        <>
            <img src={image} alt={name}
            className="w-[55%] mx-auto order-1" />
            <section className="order-3">
                <h2 className="font-bellefair text-primary uppercase text-6xl text-center mb-2"
                >{name}</h2>
                <p className="text-center text-pretty text-sm leading-7"
                >{description}</p>
                <div className="w-full h-[1px] bg-text opacity-30 my-7"></div>
                <div className="space-y-5">
                    <div className="text-center space-y-2">
                        <p className="font-barlow-con uppercase text-sm tracking-widest">Avg. distance</p>
                        <p className="font-bellefair uppercase text-3xl">{distance}</p>
                    </div>
                    <div className="text-center space-y-2">
                        <p className="font-barlow-con uppercase text-sm tracking-widest">Est. travel time</p>
                        <p className="font-bellefair uppercase text-3xl">{travel}</p>
                    </div>
                </div>
            </section>
        </>
    )
}