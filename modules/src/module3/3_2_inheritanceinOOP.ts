{
  // Inheritance in OOP

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
      console.log(`${this.name} play games for ${numberOfHours}`);
    }
  }

  const developerOne = new Developer("Mr. X", 20, "Bangladesh");

  //
}
