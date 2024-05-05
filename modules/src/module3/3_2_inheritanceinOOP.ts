{
  // inheritabce in OOP

  class Developer {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    playGames(numberOfHours: number) {
      console.log(`${this.name} plays games for ${numberOfHours} hours.`);
    }
  }

  class GameDeveloper extends Developer {
    favoriteGame: string;

    constructor(
      name: string,
      age: number,
      address: string,
      favoriteGame: string
    ) {
      super(name, age, address);
      this.favoriteGame = favoriteGame;
    }

    developGame(gameName: string) {
      console.log(`${this.name} develops ${gameName}.`);
    }
  }

  const developerOne = new Developer("Mr. X", 20, "Bangladesh");
  const gameDeveloperOne = new GameDeveloper("Mr. Y", 25, "USA", "Fortnite");

  developerOne.playGames(3); // Output: Mr. X plays games for 3 hours.
  gameDeveloperOne.playGames(2); // Output: Mr. Y plays games for 2 hours.
  gameDeveloperOne.developGame("Space Invaders"); // Output: Mr. Y develops Space Invaders.
}
