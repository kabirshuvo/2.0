{
  //
  interface Vehicle {
    bike: string;
    car: string;
    ship: string;
  }

  type Owner = "bike" | "car" | "ship"; // this is the manual example of union type

  type Owner2 = keyof Vehicle; //Digital (keyof) version of union type.

  //
}
