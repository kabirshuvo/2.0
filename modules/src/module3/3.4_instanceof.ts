{
    class Animal {
        name: string;
        age: number;
        species: string;
    
        constructor(name: string, age: number, species: string) {
            this.name = name;
            this.age = age;
            this.species = species;
        }
    
        displayInfo() {
            console.log(`Name: ${this.name}, Age: ${this.age}, Species: ${this.species}`);
        }
    }
    
    class Dog extends Animal {
        breed: string;
        color: string;
    
        constructor(name: string, age: number, species: string, breed: string, color: string) {
            super(name, age, species);
            this.breed = breed;
            this.color = color;
        }
    
        displayInfo() {
            super.displayInfo();
            console.log(`Breed: ${this.breed}, Color: ${this.color}`);
        }
    }
    
    class Cat extends Animal {
        breed: string;
        eyeColor: string;
    
        constructor(name: string, age: number, species: string, breed: string, eyeColor: string) {
            super(name, age, species);
            this.breed = breed;
            this.eyeColor = eyeColor;
        }
    
        displayInfo() {
            super.displayInfo();
            console.log(`Breed: ${this.breed}, Eye Color: ${this.eyeColor}`);
        }
    }
    
    // Creating instances
    const animal = new Animal("Tommy", 5, "Dog");
    const dog = new Dog("Buddy", 3, "Dog", "Labrador", "Golden");
    const cat = new Cat("Whiskers", 2, "Cat", "Persian", "Green");
    
    // Displaying info
    console.log("Animal Info:");
    animal.displayInfo();
    console.log("\nDog Info:");
    dog.displayInfo();
    console.log("\nCat Info:");
    cat.displayInfo();
    
}