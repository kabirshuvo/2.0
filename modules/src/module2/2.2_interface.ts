{
  // Interface type vs interface

  // type alias example
  type User1 = {
    name: string;
    age: number;
  };

  const user1: User1 = {
    name: "jol",
    age: 3,
  };

  // inter face example
  interface UserDocument {
    name: string;
    age: number;
  }

  const user2: UserDocument = {
    name: "Jol",
    age: 3,
  };

  //   টাইপ এলিয়াস = সাইন ব্যাবহার করার কারণে সব জায়গায় মানে প্রিমিটিভস এর টাইপ ডিক্লেয়ার করা যায়
  // কিন্তু ইন্টারফেস দিয়ে শুধু অবজেক্টের টাইপ ডিক্লেয়ার করা যায়।

  //Array with type alias

  //   type NumberArray = number[];

  const numbers: NumberArray = [1, 2, 3, 4, 5];

  // Array with interface
  interface StringArray {
    [index: number]: string;
  }

  const fruits: StringArray = ["apple", "banana", "orange"];

  // Array Extension

  type NumberArray = number[];
  type EvenNumberArray = NumberArray & { isEven: boolean };

  const evenNumbers: EvenNumberArray = [2, 4, 6, 8];
  evenNumbers.isEven = true;

  console.log(evenNumbers); // Output: [2, 4, 6, 8]
  console.log(evenNumbers.isEven); // Output: true

  interface StringArray extends Array<string> {
    joinWithComma(): string;
  }

  const colors: StringArray = ["red", "green", "blue"] as StringArray;

  colors.push("yellow");
  console.log(colors); // Output: ["red", "green", "blue", "yellow"]

  colors.joinWithComma = function () {
    return this.join(", ");
  };

  console.log(colors.joinWithComma()); // Output: "red, green, blue, yellow"

  {
    interface StringArray extends Array<string> {
      joinWithComma(): string;
    }

    function createStringArray(arr: string[]): StringArray {
      const result = arr as StringArray;
      result.joinWithComma = function () {
        return this.join(", ");
      };
      return result;
    }

    const colors = createStringArray(["red", "green", "blue"]);

    colors.push("yellow");
    console.log(colors); // Output: ["red", "green", "blue", "yellow"]

    console.log(colors.joinWithComma()); // Output: "red, green, blue, yellow"
  }

  {
    interface Animal {
      name: string;
    }

    interface Dog extends Animal {
      breed: string;
    }

    const myDog: Dog = {
      name: "Buddy",
      breed: "Golden Retriever",
    };
  }

  interface Printable {
    print(): void;
  }

  function printObject<T extends Printable>(obj: T) {
    obj.print();
  }

  class MyClass implements Printable {
    print() {
      console.log("Printing...");
    }
  }

  const obj = new MyClass();
  printObject(obj); // This is valid because MyClass implements Printable

  //
}
