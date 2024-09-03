
export interface SlideItem {
    id: number;
    image: string;
    title: string;
    desc: string;  
}

export const slide: SlideItem[] = [   
    {id: 1,
    image: require('../../assets/onboard 1.png'),
    title: "Find your doctor online",
    desc: "Find a doctor who will take the best  care  of your health.",
 },
 {id: 2,
    image: require('../../assets/onboard 2.png'),
    title: "Consultation with a doctor",
    desc: "We will help you book an appointment with a specialist both offline with a doctor or online.",
 },
 {id: 3,
    image: require('../../assets/onboard 3.png'),
    title: "A first aid treatment with Dominica ",
    desc: "You can have a quick chat with our AI system dominica for a first aid treatment before the doctor  arrival.",
 }
]