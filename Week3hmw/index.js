// const Chalk = require('chalk')
const Database = require('./database')
const Vinyl = require('./vinyl')
const User = require('./user')
const UserService = require('./services/-userservice')
const VinylService = require('./services/-vinylservice')

const loadedFile = Database.load('vinyl.json', (err, loadedFile) => {
    console.log('VinylLand')
})

const clark = new User("Clark Kent", 27, "Berlin");
const selina = new User("Selina Kyle", 22, "Leipzig");

const amyW = new Vinyl("Amy Winehouse", "Back to Black", 2006, "Soul");
const nirv = new Vinyl("Nirvana", "Nevermind", 1991, "Rock");
selina.buyRecord(amyW)
clark.buyRecord(nirv)



Database.save('vinyl.json', amyW)
Database.save('./vinyl.json', nirv)
Database.save('./vinyl.json', davidB)
Database.save('user.json', clark)
Database.save('user.json', selina)
Database.load('vinyl.json')

const loadedFile = Database.load()
const amyW = Vinyl.create(loadedFile)
console.log(loadedFile.records[0].name)

const UserService = require('./services/user-service')
const VinylService = require('./services/vinyl-service')

console.log('Hello World!')
console.log('Hello World!')

async function main() {
    const jean = new User("Jean Grey", 32, "Berlin");
    const bruce = new User("Bruce Wayne", 44, "Munich");
    const shuri = new User("Shuri Panther", 18, "Berlin");

    const rihanna = new Vinyl("Rihanna", "Loud", 2010, "Pop");
    const davidB = new Vinyl("David Bowie", "Aladin Sane", 1973, "Pop rock");

    selina.buyRecord(amyW)
    clark.buyRecord(nirv)

    await UserService.add(selina)
    await UserService.add(clark)
    const people = await UserService.findAll()

    console.log(people)
    const people = await UserService.findAll()

    await VinylService.add(amyW)
    console.log(people[0].name)

    const Vinyl = await VinylService.find();
    await UserService.del(1)



    console.log(newPeople[0].name)
}

main()

// amyW.printRecordsNames()
// console.log(amyW.nameArtist)


// const clark = new User("Clark Kent", 27, "Berlin");
// const selina = new User("Selina Kyle", 22, "Leipzig");


// // const amyW = new Vinyl(loadedFile.nameArtist, loadedFile.records)
// clark.buyRecord(amyW)
// selina.sellRecord(amyW)

// console.log(clark)
// console.log(selina)

// const nirv = new Vinyl("Nirvana", "Nevermind", 1991, "Rock");
// selina.buyRecord(nirv)
// console.log(selina)

// const davidB = new Vinyl("David Bowie", "Aladin Sane", 1973, "Pop rock")
// clark.buyRecord(davidB)
// console.log(clark)

// amyW.printRecordsNames()
// davidB.printRecordsNames()
// nirv.printRecordsNames()

// const loadedFile = Database.load('vinyl.json')
// console.log(loadedFile.nameArtist)

// console.log(amyW.printRecordsNames())
