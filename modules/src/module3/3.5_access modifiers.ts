{
  // Access modifire
  class BankAccount {
    public readonly id: number;
    public readonly name: string;
    protected balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
      } else {
        console.log("Insufficient balance.");
      }
    }
  }

  // Example usage
  const account = new BankAccount(123, "John", 1000);
  console.log(account.name); // Accessing public property
  // console.log(account.id); // This would cause a compilation error since id is private
  // console.log(account.balance); // This would cause a compilation error since balance is protected
  account.deposit(500); // Depositing money
  account.withdraw(200); // Withdrawing money
  // account.balance = 5000; // This would cause a compilation error since balance is protected
}
