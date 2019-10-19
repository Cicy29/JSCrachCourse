// This app connects music lovers and nostalgics of vinyls. Users can exchange, sell or buy vinyls they may not find in stores."

Seller = class {
  constructor(name, age, location, artist, album, price) {
    this.userName = name;
    this.age = age;
    this.location = location;
    this.vinylArtist = artist;
    this.albumName = album;
    this.price = price;
  }
  welcome(seller) {
    "Welcome to WonderVinyl " + seller.name + " !";
  }

  sellRecord(vinyl) {
    console.log("Great deal!");
    this.vinyl = vinyl;
    this.records.push(this);
  }
};

Purchaser = class {
  constructor(name, age, location, artist, album, price) {
    this.userName = name;
    this.age = age;
    this.location = location;
    this.vinylArtist = artist;
    this.albumName = album;
    this.price = price;
  }
  welcome(Purchaser) {
    "Welcome to WonderVinyl " + purchaser.name + " !";
  }
  buyRecord(vinyl) {
    console.log("Thank you for your purchase. Discover what we have in store!");
    this.vinyl = vinyl;
    this.records.push(this);
  }
};

Trader = class {
  constructor(name, location, artist, album) {
    this.userName = name;
    this.location = location;
    this.vinylArtist = artist;
    this.albumName = album;
  }
  welcome(trader) {
    "Welcome to WonderVinyl " + trader.name + " !";
  }
  exchangeRecord(vinyl) {
    console.log("Excellent! Keep trading!");
    this.vinyl = vinyl;
    this.records.push(this);
  }
  
};

  Vinyl = class {
    constructor(name, title, date, genre) {
      this.nameArtist = name;
      this.titleAlbum = title;
      this.releaseDate = date;
      this.genre = genre;
      this.records = [];
    }
  };
  listOfAllRecordsAvailable() {
    this.records.forEach(printAllRecords);

    printAllRecords = vinyl => console.log(vinyl.nameArtist);

    amyWinehouse = new Vinyl("Amy Winehouse", "Back to Black", 2006, "Soul");
    nirvana = new Vinyl("Nirvana", "Nevermind", 1991, "Rock");
  }
};

clark = new Seller(
  "Clark Kent",
  27,
  "Berlin",
  "Amy Winehouse",
  "Back to Black",
  10
);
selina = new Purchaser("Selina Kyle", 32, "Berlin", "Nirvana", "Nevermind", 8);
selina = new Trader("Jean Grey",32,"Berlin","Celia Cruz","Mi vida es cantar");
bruce = new Trader("Bruce Wayne", 32, "Berlin", "David Bowie", "Aladin Sane");

shuri = new Trader("Shuri Panther", 32, "Berlin", "Rihanna", "Loud");

rihanna = new Vinyl("Rihanna", "Loud", 2010, "Pop");

clark.exchangeRecord("Rihanna");
shuri.buyRecord("Nirvana");
