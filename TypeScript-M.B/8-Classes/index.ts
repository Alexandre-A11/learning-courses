// # 1 - Campos em classes
class User {
    name!: string;
    age!: number;
}

const larissa = new User();

console.log(larissa);

larissa.name = "Larissa";
// larissa.job = 'Dev' //! error

console.log(larissa);

// # 2 - Constructor
class NewUser {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const fernanda = new NewUser("Fernanda", 25);

console.log(fernanda);

// # 3 - Campos readonly
class Car {
    name;
    readonly wheels = 4;

    constructor(name: string) {
        this.name = name;
    }
}

const fusca = new Car("Fusca");

console.log(fusca);

console.log(fusca.wheels);

fusca.name = "Fusca Turbo";

// # 4 - Herança & Super
class Machine {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
    guns;

    constructor(name: string, guns: number) {
        super(name);
        this.guns = guns;
    }
}

const destroyer = new KillerMachine("Destroyer", 2);

console.log(trator);
console.log(destroyer);

// # 5 - Métodos
class Dwarf {
    name;

    constructor(name: string) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}

const jimmy = new Dwarf("Jimmy");

console.log(jimmy.name);

jimmy.greeting();

// # 6 - This
class Truck {
    model;
    hp;

    constructor(model: string, hp: number) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(
            `Caminhão do modelo ${this.model}, possui ${this.hp} cavalos de potência.`
        );
    }
}

const volvo = new Truck("Volvo", 200);
const scania = new Truck("Scania", 500);

volvo.showDetails();
scania.showDetails();

// # 7 - Utilizando Getters
class Person {
    name;
    surname;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}

const fernandaGouvea = new Person("Fernanda", "Gouvea");

console.log(fernandaGouvea.name);
console.log(fernandaGouvea.fullName);

// # 8 - Utilizando Setters
class Coords {
    x!: number;
    y!: number;

    set fillX(x: number) {
        if (x === 0) {
            return;
        }

        this.x = x;

        console.log("X: Inserido com sucesso.");
    }

    set fillY(y: number) {
        if (y === 0) {
            return;
        }

        this.y = y;

        console.log("Y: Inserido com sucesso.");
    }

    get getCoords() {
        return `X: ${this.x}, Y: ${this.y}`;
    }
}
const myCoords = new Coords();

myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 10;

console.log(myCoords);
console.log(myCoords.getCoords);

// # 9 -  Implements
interface showTitle {
    itemTitle(): string;
}

class blogPost implements showTitle {
    title;

    constructor(title: string) {
        this.title = title;
    }

    itemTitle() {
        return `O título do post é ${this.title}`;
    }
}

const myPost = new blogPost("Hello World!");

console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
    title;

    constructor(title: string) {
        this.title = title;
    }

    itemTitle() {
        return `O título é ${this.title}`;
    }
}

// # 10 - Override de Métodos
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}

class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa");
    }
}

const myObject = new Nova();

myObject.someMethod();

// # 11  - Visibilidade: Public
class C {
    public x = 10; // Adicionar o public não altera nada, pois já é public por padrão.
}

class D extends C {}

const cInstance = new C();

const dInstance = new D();

console.log(cInstance.x);
console.log(dInstance.x);

// # 12 - Visibilidade: Protected
class E {
    protected x = 10;

    protected protectedMethod() {
        console.log("Método protegido");
    }
}

class F extends E {
    showX() {
        console.log(`X: ${this.x}`);
    }

    showProtectedMethod() {
        this.protectedMethod();
    }
}

const fInstance = new F();

// console.log(fInstance.x); // ❌ protected and only accessible within class 'E' and its subclasses. //! protected
fInstance.showX(); // ✅

fInstance.showProtectedMethod(); // ✅

// # 13 - Visibilidade: Private
class PrivateClass {
    private name = "Private";

    showName() {
        return this.name;
    }

    private privateMethod() {
        console.log("Método privado");
    }

    showPrivateMethod() {
        this.privateMethod();
    }
}

const pObj = new PrivateClass();

// console.log(pObj.name); // ❌
console.log(pObj.showName()); // ✅

// pObj.privateMethod(); // ❌
pObj.showPrivateMethod(); // ✅

// # 14 - Static Members

class StaticMembers {
    static prop = "Teste Static";

    static staticMethod() {
        console.log("Método estático");
    }
}

console.log(StaticMembers.prop);

StaticMembers.staticMethod();

// # 15 - Generic Class
class Item<T, U> {
    first;
    second;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }

    get showFirst() {
        return `First: ${this.first}`;
    }
}

const newItem = new Item("caixa", "surpresa");

console.log(newItem);

console.log(newItem.showFirst);
console.log(typeof newItem.first);

const secondItem = new Item(10, true);

console.log(secondItem.showFirst);
console.log(typeof secondItem.first);

// # 16 - Parameters Properties
class ParametersProperties {
    constructor(
        public name: string,
        private qty: number,
        private price: number
    ) {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }

    get showQty() {
        return `Qtd Total: ${this.qty}`;
    }

    get showPrice() {
        return `Preço Total: ${this.price}`;
    }
}
const newShirt = new ParametersProperties("Camisa", 5, 19.99);

console.log(newShirt.name);

// console.log(newShirt.price); // ❌

console.log(newShirt.showQty);
console.log(newShirt.showPrice);

// # 17 - Class Expressions
const myClass = class<T> {
    name;

    constructor(name: T) {
        this.name = name;
    }
};

const pessoa = new myClass("Fernanda");
console.log(pessoa);

console.log(pessoa.name);

// # 18 - Abstract Class
abstract class AbstractClass {
    abstract showName(): void;
}

// const newObj = new AbstractClass(); // ❌

class AbstractExample extends AbstractClass {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    showName() {
        console.log(`Nome: ${this.name}`);
    }
}

const newAbstractObject = new AbstractExample("Fernanda");

newAbstractObject.showName();

// # 19 - Relações entre classes
class Dog {
    name!: string;
}

class Cat {
    name!: string;
}

const doguinho: Dog = new Cat(); // 😨

console.log(doguinho);
