{
  // Polymorphism
  // Superclass
  class Shape {
    calculateArea(): number {
      return 0; // Default implementation, overridden by subclasses
    }
  }

  // Subclass Circle
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    calculateArea(): number {
      return Math.PI * this.radius * this.radius; // Area of a circle
    }
  }

  // Subclass Rectangle
  class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }

    calculateArea(): number {
      return this.width * this.height; // Area of a rectangle
    }
  }

  // Usage
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);

  console.log("Area of the circle:", circle.calculateArea()); // Output: 78.53981633974483
  console.log("Area of the rectangle:", rectangle.calculateArea()); // Output: 24
}
