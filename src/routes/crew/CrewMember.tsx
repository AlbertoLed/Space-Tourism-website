import { CrewMember as Member } from "../../utils"

export default function CrewMember(props: {member:Member}) {
    const { member } = props

    return(
        <> 
            <img src={member.image} alt={`${member.name} image`} />
            <div>
                <p>{member.role}</p>
                <p>{member.name}</p>
                <p>{member.bio}</p>
            </div>
        </>
    )
}