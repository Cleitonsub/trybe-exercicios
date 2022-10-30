/*
Para criar uma classe, basta utilizar a palavra reservada class,
seguida do nome da classe e um par de chaves.
*/
class Person {
/*
  Podemos criar atributos: digitando o nome do
atributo e seu tipo.
*/
// ATRIBUTOS
  name: string;
  height: number;
  weight: number;

/*
  Método constructor é necessário para receber parâmetros
  */
// MÉTODOS
  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  };

/*
  Podemos criar métodos: digitando seu nome, os parênteses com os
parâmetros e as chaves com o corpo, assim como uma função normal,
só que sem precisar do const ou let.
  Método qualquer de exemplo
*/
  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  };
};

/*
  Com a classe Person, podemos criar dois (ou mais) objetos
(duas pessoas) diferentes, p1 e p2.
  O método construtor (constructor) é chamado assim que utilizamos a
sintaxe de criação de um objeto com a palavra reservada new.
  O construtor recebe os parâmetros n, h e w, que foram reduzidos
apenas para deixar explícito que o nome não é diretamente relacionado
com o atributo que eles populam, mas normalmente eles possuem o mesmo
nome (ou seja, n seria name, etc).
*/
// Criação dos objetos (instanciando objetos)
const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);

// Acesso aos objetos
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);

// Acesso aos métodos
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/