interface UserInterface {
  firstName: string;
  readonly lastName?: string;
  age: number;

  getFullName(): string;
}

const getUser = (user: UserInterface): string => {
  return `${user.firstName} ${user.lastName}, age: ${user.age}`;
};

// let user = {
//   firstName: "Juliano",
//   lastName: "Lima",
//   age: 37,
// };

// console.log(getUser(user));

class Person implements UserInterface {
  firstName: string;
  readonly lastName?: string;
  age: number;

  constructor(firstN: string, lastN: string, ageU: number) {
    this.firstName = firstN;
    this.lastName = lastN;
    this.age = ageU;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("Juliano", "Lima", 37);
console.log(getUser(person));
