function showProductDetails(product) {
    console.log("O produto ".concat(product.name, " custa R$ ").concat(product.price));
    if (product.isAvailable) {
        console.log("O produto ".concat(product.name, " est\u00E1 dispon\u00EDvel"));
    }
}
var shirt = {
    name: "Camiseta",
    price: 100,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Calça", price: 200, isAvailable: false });
function showUserDetails(user) {
    console.log("O usu\u00E1rio ".concat(user.email));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usu\u00E1rio \u00E9 ".concat(user.role));
    }
}
var u1 = { email: "alexandre@email.com", role: "Admin" };
var u2 = { email: "karen@email.com" };
showUserDetails(u1);
showUserDetails(u2);
var fusca = {
    brand: "Volkswagen",
    wheels: 4
};
console.log(fusca);
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
var lucas = {
    name: "Lucas",
    age: 25
};
console.log(lucas);
var goku = {
    name: "Goku",
    age: 50,
    superPowers: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
console.log(goku.superPowers);
var arnold = {
    name: "Arnold",
    type: "AK-47",
    caliber: 7.62
};
console.log(arnold);
console.log(arnold.type);
// # 7 - Readonly Array
// Pode ser alterado por métodos como .map(), forEach(), etc, mas não diretamente.
var myArray = ["Maçã", "Banana", "Uva"];
// myArray[3] = "Laranja"; //! error
myArray.forEach(function (item) { return console.log("Fruta: " + item); });
console.log(myArray);
myArray = myArray.map(function (item) {
    return "Fruta: " + item;
});
console.log(myArray);
var myNumberArray = [1, 2, 3, 4, 5];
var anotherUser = ["Italo", 28];
console.log(anotherUser[0]);
anotherUser[0] = "Gustavo";
console.log(anotherUser[0]);
// # 9 - Tuplas com Readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
