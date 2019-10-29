// const Chalk = require('chalk')
module.exports = class Vinyl {
    constructor(name, title, date, genre, price) {
        // if (!price) {
        //     throw new Error("Please select Exchange option.");
        // }
        this.nameArtist = name;
        this.titleAlbum = title;
        this.releaseDate = date;
        this.genre = genre;
        this.price = price;
        this.records = [];

    }

    printRecordNames() {
        this.records.forEach(printName)
    }

};
printName = vinyl => console.log(vinyl.nameArtist)