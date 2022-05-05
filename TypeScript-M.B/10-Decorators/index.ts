// # 1 - Decorator Exemplo

function myDecorator() {
    console.log("Iniciando Decorator!");

    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executando Decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}

class myClass {
    name!: string;

    @myDecorator()
    testing() {
        console.log("Terminando execução do método.");
    }
}

const myObj = new myClass();

myObj.testing();

// # 2 - Múltiplos Decorators
function a() {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou a.");
    };
}

function b() {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou b.");
    };
}

function c() {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou c.");
    };
}

class MultipleDecorators {
    @a() // Executa em terceiro
    @b() // Executa em segundo
    @c() // Executa primeiro
    testing() {
        console.log("Terminando Execução");
    }
}

const multiple = new MultipleDecorators();

multiple.testing();

// # 3 - Class Decorator
// prettier-ignore
function classDecorator(constructor: Function) { 
    console.log(constructor);

    if (constructor.name === "User") { // Verifica se é a classe User
        console.log("Criando Usuário");
    }
}

@classDecorator
class User {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const karen = new User("Karen");

console.log(karen);

// # 4 - Method Decorator
function enumerable(value: boolean) {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value;
    };
}

class Machine {
    name;

    constructor(name: string) {
        this.name = name;
    }

    @enumerable(false)
    showName() {
        console.log(this);
        return `Machine name is ${this.name}`;
    }
}

const trator = new Machine("Trator");

trator.showName();

// # 5 - Acessor Decorator
class Monster {
    name?;
    age?;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    get showName() {
        return `Monster name is ${this.name}`;
    }
    get showAge() {
        return `Monster age is ${this.name}`;
    }
}

const charmander = new Monster("Charmander", 10);

console.log(charmander);

// # 6 - Property Decorator

function formatNumber() {
    return function (target: Object, propertKey: string) {
        let value: string;

        const getter = function () {
            return value;
        };

        const setter = function (newVal: string) {
            value = newVal.padStart(5, "0");
        };

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    };
}

class ID {
    @formatNumber()
    id;

    constructor(id: string) {
        this.id = id;
    }
}

const newItem = new ID("1");

console.log(newItem);

// # 7 - Class Decorator (Exemplo Real)
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    createdAt?: Date; // Necessário caso queira acessar diretamente o atributo, como parâmetro do constructor retorna undefined // ?
    constructor(public id: number) { // necessário adicionar public para não declarar o atributo antes do constructor // ?
        this.id = id;
    } // prettier-ignore
}

@createdDate
class Pen {
    constructor(public id: number) {
        this.id = id;
    }
}

const newBook = new Book(12);
const newPen = new Pen(55);

console.log(newBook);
console.log(newBook.createdAt);
console.log(newPen);

// # 8 - Method Decorator (Exemplo Real)
function checkIfUserPosted() {
    return function (
        target: Object,
        key: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args: any[]) {
            if (args[1] === true) {
                console.log("Usuário já postou uma vez!");
            } else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}

class Post {
    alreadyPosted = false;

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true;
        console.log(`Post: ${content}`);
    }
}

const newPost = new Post();

newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu segundo post!", newPost.alreadyPosted);
newPost.post("Meu terceiro post!", newPost.alreadyPosted);

// # 9 - Property Decorator (Exemplo Real)

function Max(limit: number) {
    return function (target: Object, propertyKey: string) {
        let value: string;

        const getter = function () {
            return value;
        };

        const setter = function (newVal: string) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} caracteres.`);
            } else {
                value = newVal;
            }
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
class Admin {
    @Max(10)
    username; // Para usar decorator na propriedade, é necessário adiciona-lá antes do constructor // ?
    constructor(username: string) {
        this.username = username;
    }
}

let larissa = new Admin("LarissaAdmin2012");
let fernanda = new Admin("FernandaA");
