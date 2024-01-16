import { CrewMember as Member } from "../../utils"

export default function CrewMember(props: {member:Member}) {
    const { member } = props

    return(
        <> 
            <img src={member.image} alt={`${member.name} image`} 
            className="order-1 w-[55%] mx-auto"/>
            <div className="order-3 text-center">
                <p className="font-bellefair uppercase mb-2">{member.role}</p>
                <p className="font-bellefair uppercase text-primary text-2xl mb-5">{member.name}</p>
                <p className="text-sm leading-7 text-pretty">{member.bio}</p>
            </div>
        </>
    )
}