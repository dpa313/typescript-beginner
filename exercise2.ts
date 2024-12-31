type PersonAlt = {
    name: string
    age: number
    isStudent: boolean
}

let personOne: PersonAlt = {
    name: "Joe",
    age: 22,
    isStudent: true
}

let personTwo: PersonAlt = {
    name: "Doe",
    age: 66,
    isStudent: false
}

let people: PersonAlt[] = [personOne,personTwo]