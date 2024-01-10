import { Destination } from "../../utils"

export default function DestinationPlace(props: {place: Destination}) {
    const {name, description, distance, travel, image} = props.place
    return(
        <>
            <img src={image} alt={name}
            className="w-[70%] mx-auto" />
            <section>
                <h2 className="">{name}</h2>
                <p>{description}</p>
                <div></div>
                <div>
                    <div>
                        <p>Avg. distance</p>
                        <p>{distance}</p>
                    </div>
                    <div>
                        <p>Est. travel time</p>
                        <p>{travel}</p>
                    </div>
                </div>
            </section>
        </>
    )
}