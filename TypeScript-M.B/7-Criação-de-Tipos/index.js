// # 1 - Generics
function showData(arg) {
    return "O dado \u00E9 ".concat(arg);
}
console.log(showData(5));
console.log(showData("Testando Generics"));
console.log(showData(true));
console.log(showData(["teste"]));
// # 2 - Constraints em Generics
function showProductName(obj) {
    return "O nome do produto \u00E9 ".concat(obj.name);
}
var myObj = { name: "Porta", cor: "Branca" };
var otherPorduct = { name: "Carro", wheels: 4, engine: 1.0 };
var thirdObj = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherPorduct));
var myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
var myPen = { name: "Bic", wheels: false, engine: false, color: "Azul" };
// # 4 - Type Parameters
function getSomeKey(obj, key) {
    return "A chave ".concat(key, " est\u00E1 presente no objeto e tem o valor de  ").concat(obj[key]);
}
var server = { hd: "2TB", ram: "8GB", cpu: "i7" };
console.log(getSomeKey(server, "hd"));
function showCharName(obj, name) {
    return "".concat(obj[name]);
}
var myChar = { name: "Fernanda", age: 25, hasDriverLicense: true };
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
// # 6 - typeof Type Operator
var userName = "Alexandre";
var userName2 = "Fernanda";
var userName4 = "Larissa";
var newTruck = { km: 100, kg: 200, description: "Caminhão" };
function showKm(Km) {
    console.log("O ve\u00EDculo tem ".concat(Km, "Km"));
}
showKm(newTruck.km);
var newCar = { km: 1000, kg: 1000 };
showKm(newCar.km);
var someVar = 5;
var testing = "some text";
