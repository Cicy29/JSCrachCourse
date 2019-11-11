// const Chalk = require('chalk')
module.exports = class Vinyl {
    constructor(name, title, date, genre, price, records = []) {
        // if (!price) {
        //     throw new Error("Please select Exchange option.");
        // }
        this.nameArtist = name;
        this.titleAlbum = title;
        this.releaseDate = date;
        this.genre = genre;
        this.price = price;
        this.records = records;
        this.users = [];
        this.id = id;

    }

    printRecordsNames() {
        this.records.forEach(printName)
    }
    static create({
        name,
        title,
        date,
        genre,
        price,
        records = []
    }) {
        const vinyl = new Vinyl(name, title, date, genre, price)
        vinyl.records = records.map(User.create)

        return records
    }

};
printName = vinyl => console.log(vinyl.nameArtist)