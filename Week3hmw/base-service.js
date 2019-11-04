const fe = require('fs')

module.exports = class Service {
    constructor(model, dbPath)
    this.model = model;
    this.dbPath = dbPath;

}

async function main() {
    const jean = new User("Jean Grey", 32, "Berlin");
    const bruce = new User("Bruce Wayne", 44, "Munich");
    const shuri = new User("Shuri Panther", 18, "Berlin");

    const rihanna = new Vinyl("Rihanna", "Loud", 2010, "Pop");
    const davidB = new Vinyl("David Bowie", "Aladin Sane", 1973, "Pop rock");

    selina.buyRecord(amyW)
    clark.buyRecord(nirv)
    jean.exchangeRecord(davidB)

    await UserService.add(jean)
    await UserService.add(bruce)
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