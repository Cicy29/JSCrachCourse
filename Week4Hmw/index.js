const express = require("express");
const app = express();
const UserService = require('./services/user-service')
const VinylService = require('./services/vinyl-service')
const bodyParser = require('body-parser')
const path = require('path')

app.set("view engine", "pug");
app.use(bodyParser.json())



app.get("/", (req, res) => {
    // res.send("Hello");
    // res.sendFile(__dirname + '/index.html')
    res.render("index");
});

app.get("/user/all", async (req, res) => {
    const people = await UserService.findAll();
    res.render('user', {
        people
    })
})

app.post("/user", (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user)

})

app.delete('/user/:id', async (req, res) => {
    const user = await UserService.del(req.params.id)
    res.send(user)
})
app.listen(3000, () => {
    console.log("Server listening");
});








// // const Chalk = require('chalk')
// const Database = require('./database')
// const Vinyl = require('./vinyl')
// const User = require('./user')
// const UserService = require('./user-service')
// const VinylService = require('./vinyl-service')

// Database.load('vinyl.json', (err, loadedFile) => {
//     console.log(loadedFile)
// })

// const clark = new User("Clark Kent", 27, "Berlin");
// const selina = new User("Selina Kyle", 22, "Leipzig");

// let amyW = new Vinyl("Amy Winehouse", "Back to Black", 2006, "Soul");
// const nirv = new Vinyl("Nirvana", "Nevermind", 1991, "Rock");
// selina.buyRecord(amyW)
// clark.buyRecord(nirv)

// const davidB = new Vinyl("David Bowie", "Aladin Sane", 1973, "Pop rock");

// Database.save('vinyl.json', amyW)
// Database.save('./vinyl.json', nirv)
// Database.save('./vinyl.json', davidB)
// Database.save('user.json', clark)
// Database.save('user.json', selina)
// // Database.load('vinyl.json')

// // const loadedFile = Database.load()
// // amyW = Vinyl.create(loadedFile)
// // console.log(loadedFile.records[0].name)

// console.log('Hello World!')
// console.log('Hello World!')

// async function main() {
//     const jean = new User("Jean Grey", 32, "Berlin");
//     const bruce = new User("Bruce Wayne", 44, "Munich");
//     const shuri = new User("Shuri Panther", 18, "Berlin");

//     const rihanna = new Vinyl("Rihanna", "Loud", 2010, "Pop");

//     selina.buyRecord(amyW)
//     clark.buyRecord(nirv)

//     await UserService.add(selina)
//     await UserService.add(clark)
//     const people = await UserService.findAll()

//     console.log(people)
//     // people = await UserService.findAll()

//     await VinylService.add(amyW)
//     console.log(people[0].name)

//     // const Vinyl = await VinylService.find();
//     await UserService.del(1)



//     console.log(newPeople[0].name)
// }

// main()