{
  // statics of OOP
  class Counter {
    static count: number = 0;

    increment(): number {
      return ++Counter.count;
    }

    decrement(): number {
      return --Counter.count;
    }
  }

  class MathHelper {
    static PI: number = 3.14159;

    static calculateCircleArea(radius: number): number {
      return this.PI * radius * radius;
    }

    static calculateCircleCircumference(radius: number): number {
      return 2 * this.PI * radius;
    }
  }

  // Accessing static properties
  console.log(MathHelper.PI); // Outputs: 3.14159

  // Calling static methods
  const radius = 5;
  const area = MathHelper.calculateCircleArea(radius);
  console.log(`Area of the circle with radius ${radius}: ${area}`);

  const circumference = MathHelper.calculateCircleCircumference(radius);
  console.log(
    `Circumference of the circle with radius ${radius}: ${circumference}`
  );
}
