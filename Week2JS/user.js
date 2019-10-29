module.exports = class User {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.records = [];

    }
    welcome(user) {
        console.log("Welcome to WonderVinyl " + user.name + " !");
    }

    sellRecord() {
        console.log("Great deal!");
    }

    buyRecord(vinyl) {
        console.log("Thank you for your purchasing " + vinyl.nameArtist + ", " + "Discover what we have in store!");
        this.vinyl = vinyl.name;
        vinyl.records.push(this)
    }

    exchangeRecord() {
        console.log("Excellent! Keep trading!");

    }

};
