class Vehicle {
  constructor(public brand: string, private automaker: string) {};
  public speed(): string {
    console.log(`O ${this.brand} acelera!`);
    return `O ${this.brand} acelera!`;
  }
}

class Car extends Vehicle {
  constructor(brand: string, automaker: string) {
    super(brand, automaker);
  };
  public speed(): string {
    console.log(super.speed() + `Acelera o ${this.brand}`);
    return super.speed() + `Acelera o ${this.brand}`;
  }
};

const carro = new Car('Golf', 'VW');

interface Person {
  name: string;
  info: string;
};

class Student implements Person {
  constructor(
    public name: string,
    public school: string
  ) { };
  
  get info() {
    return `${this.name} estuda no colégio ${this.school}`
  };
};

class Professor implements Person {
  constructor(
    public name: string,
    public school: string,
    public subject: string
  ) { };

  get info() {
    return `${this.name} leciona ${this.subject} no colégio ${this.school}`
  };
};

function printInfo(person: Person) {
  console.log(person.info);
};

const student = new Student('Cleiton', 'Itacellina');
const professor = new Professor('Maria', 'Marista', 'Sociologia');

printInfo(student);
printInfo(professor);
