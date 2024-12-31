// let myName: string = "Apu"

// let numberOfWheels: number = 5
// let isStudent: boolean = true

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person1: Person = {
    name: "Apu",
    age: 28,
    isStudent: false,
}

let person2: Person = {
    name: "Dipu",
    age: 21,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "Bangladesh"
    }
}

const displayInfo(person){
    console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1)