class Tv {
  private brand: string;
  private size: number;
  private resolution: number;
  private connections: object;
  private connectedTo: string;

  constructor( brand: string, size: number, resolution: number,
    connections: object) {};

  public turnOn() {
    console.log(`${this.brand}, ${this.size}, ${this.resolution}, 
    ${this.connections}, `);
  };

  public getConnect() {
    this.connectedTo = 'hdmi';
    console.log(this.connectedTo);
  };

  public setConnect(string: string) {
    if (this.connections[string.toLowerCase()] === true) {
      this.connectedTo = string;
    }
    console.log('Sorry, connection unavailable!');
  };
};

// Criação dos objetos (instanciando objetos)
const tv1 = new Tv('Samsung', 55, 2160, { hdmi: true, usb: true});

tv1.turnOn();

