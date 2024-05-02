// Basic Data types:

// string
let firstname: string = "kabir";
// number
let phoneNumber: number = +88011001212121;
// boolean
let isMovingForward: boolean = true;
// undefined

// null

// Array

let BookName: string[] = ["Pother Pachali", "foundation-by-Isac Achimov"];

let TicketNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];

//tuple --> array --> order --> type of values

let coordinates: [number, number] = [1, 5];

let ageValidation: [number, string, boolean] = [11, "maksud", false];

// Reference Type --> object

const user: {
  // literal types
  country: "Bangladesh";
  firstName: string;
  //   optional type ?
  middleName?: string;
  lastname: string;
} = {
  country: "Bangladesh",
  firstName: "kabir",
  middleName: "hossain",
  lastname: "Shuvo",
};
