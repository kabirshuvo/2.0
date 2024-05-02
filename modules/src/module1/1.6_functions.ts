// Learning function
// normal Function
// Arrow Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// function in an array is called method
const userPaymentStatus = {
  name: "kabir",
  paid: 0,
  addPayment(balance: number): number {
    return this.paid + balance;
  },
};

const arr: number[] = [1, 2, 3, 4, 5];

const newArray: number[] = arr.map((e: number): number => e * e);
