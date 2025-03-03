type L0calCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: L0calCityType
}
type TechType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}


export const student: StudentType = {
    id: 1,
    name: "Markha",
    age: 29,
    isActive: true,
    address: {
        streetTitle: "Wehrstrasse 3",
        city: {
            title: "Munster",
            countryTitle: "Germany"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },

    ]

}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)