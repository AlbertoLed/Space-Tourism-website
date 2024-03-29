// INTERFACES

export interface Destination {
    name: string;
    description: string;
    distance: string;
    travel: string;
    image: string;
}

export interface CrewMember {
    name: string;
    role: string;
    bio: string;
    image: string;
}

export interface Technology {
    id: number;
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}