type Sound = "voff" | "ugh" | "aahhg"
type Race = "Golden" | "Shiba" | "Pudel"

interface Dog {
    name: string
    age: number
    race: Race
    makeSound: (sound: Sound) => void
}

const myDog: Dog = {
    name: "Julius",
    age: 8,
    race: "Golden",
    makeSound: (sound: Sound) => { console.log(sound) }
}
