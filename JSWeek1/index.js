// This app connects music lovers and nostalgics of vinyls.
// This app allows users to be a part of a community where they can exchange, sell or buy vinyls they may not find in stores."

User = class {
  constructor(name, age, location) {
    this.userName = name;
    this.age = age;
    this.location = location;
  }
  welcome(user) {
    console.log("Welcome to WonderVinyl " + user.name + " !");
  }

  sellRecord() {
    console.log("Great deal!");
  }

  buyRecord(vinyl) {
    console.log("Thank you for your purchase. Discover what we have in store!");
    this.vinyl = vinyl;
    this.records.push(vinyl);
  }

  exchangeRecord() {
    console.log("Excellent! Keep trading!");
  }
};

Vinyl = class {
  constructor(name, title, date, genre, price) {
    this.nameArtist = name;
    this.titleAlbum = title;
    this.releaseDate = date;
    this.genre = genre;
    this.price = price;
    if (!price) {
      throw new Error("Please select Exchange option.");
    }
    this.records = [];
  }
  printAllRecordsAvailable() {
    this.records.forEach(printAllRecords);
  }
};

printAllRecords = vinyl => console.log(vinyl.name);

amyWinehouse = new Vinyl("Amy Winehouse", "Back to Black", 2006, "Soul");
nirvana = new Vinyl("Nirvana", "Nevermind", 1991, "Rock");
rihanna = new Vinyl("Rihanna", "Loud", 2010, "Pop");
davidBowie = new Vinyl("David Bowie", "Aladin Sane", 1973, "Pop rock");

clark = new User("Clark Kent", 27, "Berlin");
selina = new User("Selina Kyle", 22, "Leipzig");
jean = new User("Jean Grey", 32, "Berlin");
bruce = new User("Bruce Wayne", 44, "Munich");
shuri = new User("Shuri Panther", 18, "Berlin");

clark.exchangeRecord(rihanna);
shuri.buyRecord(nirvana);
bruce.sellRecord(davidBowie);
