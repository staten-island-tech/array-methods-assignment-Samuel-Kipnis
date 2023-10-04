const people = [
    {
        firstName: 'Samuel',
        lastName: 'Kipnis',
        age: 14,
        height: 66,
        favoriteNumbers: [1, 5, 7, 15]
    },
    {
        firstName: 'Kamuel',
        lastName: 'Sipnis',
        age: 9,
        height: 50,
        favoriteNumbers: [2, 4, 98, 176]
    },
    {
        firstName: 'Samuek',
        lastName: 'Lipnis',
        age: 90,
        height: 60,
        favoriteNumbers: [3, 9, 27, 81]
    },
    {
        firstName: 'Namuel',
        lastName: 'Kipsis',
        age: 69,
        height: 64,
        favoriteNumbers: [5, 25, 125, 625]
    }
]

function getNames () {
    people.forEach((person) => {
        console.log(`${person.firstName} ${person.lastName}`)
    })
}

function getFavoriteNumbers() {
    people.forEach((person) => {
        console.log(`${person.firstName} ${person.lastName}'s Favorite Numbers`)
        person.favoriteNumbers.forEach((number) => console.log(`   ${number}`))
    })
}

function getSeniors() {
    const seniors = people.filter((person) => {
        return person.age >= 65
    })
    console.log(seniors)
}