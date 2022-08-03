class Superclass {
  constructor(public isSuper: boolean) {
    this.isSuper = true;
  };

  public sayHello(): string {
    console.log('Olá mundo!');
    return 'Olá mundo!'
  };
};

class Subclass extends Superclass {
  constructor(isSuper: boolean) {
    super(isSuper)
  };

}
