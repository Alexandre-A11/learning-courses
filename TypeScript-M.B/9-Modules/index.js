"use strict";
exports.__esModule = true;
// # 1 - Importando arquivos
var greet_js_1 = require("./greet.js"); // extensão pode ser omitida quando for .js
(0, greet_js_1["default"])();
// # 2 - Importando Variáveis
var variable_js_1 = require("./variable.js");
console.log(variable_js_1.x);
// # 3 - Múltiplas importações
var multiple_js_1 = require("./multiple.js");
console.log(multiple_js_1.a);
console.log(multiple_js_1.b);
(0, multiple_js_1.myFunction)();
// # 4 - Alias para importações
var changename_js_1 = require("./changename.js");
console.log(changename_js_1.someName);
// # 5 - Import all
var myNumbers = require("./numbers.js"); // Necessário criar um alias.
console.log(myNumbers);
console.log(myNumbers.n1);
myNumbers.showNumbers();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var fernanda = new User("Fernanda", 25);
console.log(fernanda);
