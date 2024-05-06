{
  class BankAccount {
    private id: number;
    private balance: number;

    constructor(id: number, initialBalance: number) {
      this.id = id;
      this.balance = initialBalance;
    }

    // Method to get the account ID (Getter)
    getId(): number {
      return this.id;
    }

    // Method to get the account balance (Getter)
    getBalance(): number {
      return this.balance;
    }

    // Method to deposit money into the account
    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(
          `${amount} deposited successfully. New balance: ${this.balance}`
        );
      } else {
        console.log("Invalid amount for deposit.");
      }
    }

    // Method to withdraw money from the account
    withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(
          `${amount} withdrawn successfully. New balance: ${this.balance}`
        );
      } else {
        console.log("Insufficient balance or invalid amount for withdrawal.");
      }
    }
  }

  // Usage
  const account = new BankAccount(123456, 1000);
  console.log("Account ID:", account.getId()); // Output: 123456
  console.log("Initial balance:", account.getBalance()); // Output: 1000
  account.deposit(500); // Output: "500 deposited successfully. New balance: 1500"
  account.withdraw(200); // Output: "200 withdrawn successfully. New balance: 1300"
}
