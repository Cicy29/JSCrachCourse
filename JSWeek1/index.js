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

  sellRecord(vinyl) {
    console.log("Great deal!");
    this.vinyl = vinyl;
    this.records.push(this);
  }

  buyRecord(vinyl) {
    console.log("Thank you for your purchase. Discover what we have in store!");
    this.vinyl = vinyl;
    this.records.push(this);
  }

  exchangeRecord(vinyl) {
    console.log("Excellent! Keep trading!");
    this.vinyl = vinyl;
    this.records.push(this);
  }
};

Vinyl = class {
  constructor(name, title, date, genre, price) {
    this.nameArtist = name;
    this.titleAlbum = title;
    this.releaseDate = date;
    this.genre = genre;
    this.price = price;
    if (this.priceNotAvailable) {
      console.log("Please select Exchange option.");
    }
    this.records = [];
  }
};

printAllRecordsAvailable();
this.records.forEach(printAllRecords);

printAllRecords = vinyl => console.log(vinyl.nameArtist);

amyWinehouse = new Vinyl("Amy Winehouse", "Back to Black", 2006, "Soul");
nirvana = new Vinyl("Nirvana", "Nevermind", 1991, "Rock");
rihanna = new Vinyl("Rihanna", "Loud", 2010, "Pop");
davidBowie = new Vinyl("David Bowie", "Aladin Sane", 1973, "Pop rock");

clark = new User("Clark Kent", 27, "Berlin");
selina = new User("Selina Kyle", 22, "Berlin");
jean = new User("Jean Grey", 32, "Berlin");
bruce = new User("Bruce Wayne", 44, "Berlin");
shuri = new User("Shuri Panther", 18, "Berlin");

clark.exchangeRecord(rihanna);
shuri.buyRecord(nirvana);
bruce.sellRecord(davidBowie);
