class Person {
  public name: string;
  public birthDate: Date;

  constructor(name: string, birthDate: Date) {};

  get _name(): string {
    return this.name;
  };

  get _birthDate(): Date {
    return this.birthDate;
  }

  set _name(name: string) {
    if (name && name.length > 3) {
      this.name = name;
    }
  };

  set _birthDate(birthDate: Date) {
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    const date = birthDate.toString();
    if (dateRegex.test(date)) {
      this.birthDate = birthDate;
    }
  };



};