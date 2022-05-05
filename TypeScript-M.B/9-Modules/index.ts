// # 1 - Importando arquivos
import importGreet from "./greet.js"; // extensão pode ser omitida quando for .js

importGreet();

// # 2 - Importando Variáveis
import { x } from "./variable.js";

console.log(x);

// # 3 - Múltiplas importações
import { a, b, myFunction } from "./multiple.js";

console.log(a);
console.log(b);

myFunction();

// # 4 - Alias para importações
import { someName as name } from "./changename.js";

console.log(name);

// # 5 - Import all
import * as myNumbers from "./numbers.js"; // Necessário criar um alias.

console.log(myNumbers);

console.log(myNumbers.n1);
myNumbers.showNumbers();

// # 6 - Importando Tipos
import { Human } from "./mytype.js";

class User implements Human {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const fernanda = new User("Fernanda", 25);

console.log(fernanda);
