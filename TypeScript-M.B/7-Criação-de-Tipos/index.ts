// # 1 - Generics
function showData<T>(arg: T): string {
    return `O dado é ${arg}`;
}

console.log(showData(5));
console.log(showData("Testando Generics"));
console.log(showData(true));
console.log(showData(["teste"]));

// # 2 - Constraints em Generics
function showProductName<T extends { name: string }>(obj: T) {
    return `O nome do produto é ${obj.name}`;
}

const myObj = { name: "Porta", cor: "Branca" };
const otherPorduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupa" };

console.log(showProductName(myObj));
console.log(showProductName(otherPorduct));
// console.log(showProductName(thirdObj)); //! error

// # 3 - Interfaces com Generics
interface MyObject<T, U, Q> {
    name: string;
    wheels: T;
    engine: U;
    color: Q;
}
type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen: Pen = { name: "Bic", wheels: false, engine: false, color: "Azul" };

// # 4 - Type Parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key} está presente no objeto e tem o valor de  ${obj[key]}`;
}

const server = { hd: "2TB", ram: "8GB", cpu: "i7" };

console.log(getSomeKey(server, "hd"));

// # 5 - Keyof Type Operator
type Character = { name: string; age: number; hasDriverLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`;
}

const myChar: Character = { name: "Fernanda", age: 25, hasDriverLicense: true };

console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));

// # 6 - typeof Type Operator
const userName: string = "Alexandre";

const userName2: typeof userName = "Fernanda";

// const userName3: typeof userName = 20; //! error

type x = typeof userName;

const userName4: x = "Larissa";

// # 7 - Indexed Access Type
type Truck = { km: number; kg: number; description: string };

type Km = Truck["km"];

const newTruck: Truck = { km: 100, kg: 200, description: "Caminhão" };

function showKm(Km: Km) {
    console.log(`O veículo tem ${Km}Km`);
}

showKm(newTruck.km);

const newCar = { km: 1000, kg: 1000 };

showKm(newCar.km);

// # 8 - Conditional Types
interface A {}

interface B extends A {}

interface Teste {
    showName(): string;
}
type myType = B extends A ? number : string;

const someVar: myType = 5;
// const someVar2: myType = "Teste"; // ! error

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

// # 9 - Template Literals Type
type testA = "text";

type CustomType = `some ${testA}`;

const testing: CustomType = `some text`;
// const testing2: CustomType = `some text 2`;

type a1 = "Testando";
type a2 = "Union";

type a3 = `${a1}` | `${a2}`;
