const User = require('./user')
const Vinyl = require('./vinyl')
// const Chalk = require('chalk')
const Database = require('./database')

const clark = new User("Clark Kent", 27, "Berlin");
const selina = new User("Selina Kyle", 22, "Leipzig");

console.log(clark)


const amyW = new Vinyl("Amy Winehouse", "Back to Black", 2006, "Soul");
clark.buyRecord(amyW)
selina.buyRecord(amyW)

const nirv = new Vinyl("Nirvana", "Nevermind", 1991, "Rock");
selina.buyRecord(nirv)

const davidB = new Vinyl("David Bowie", "Aladin Sane", 1973, "Pop rock")
clark.buyRecord(davidB)


amyW.printRecordNames()
davidB.printRecordNames()
nirv.printRecordNames()

Database.save('vinyl.json', amyW)
Database.save('user.json', clark)

const loadedFile = Database.load('vinyl.json')
console.log(loadedFile)