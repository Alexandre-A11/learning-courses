<div class="title">Operadores Relacionais</div>

<style>
    p {
        margin-bottom: 0px;
    }
    hr {
        margin-top: 0px;
    }

</style>

<?php
// var_dump(1 == 1); // True
// var_dump(1 > 1); // False
// var_dump(1 >= 1); // True
// var_dump(4 < 23) ; // True
// var_dump(1 <= 7) ; // True
// var_dump(1 <> 1); // False
// var_dump(1 != 1); // False

var_dump(1 == "1"); // True
var_dump(1 === "1"); // False
var_dump(1 != "1"); // False
var_dump(1 !== "1"); // true

echo "<p class='division'>Relacionais no If/Else</p><hr>";
$idade = 25;
if($idade < 18) {
    echo "Menor de idade = $idade anos<br>";
} else if($idade <= 65) {
    echo "Adulto = $idade anos<br>";
} else {
    echo "Terceira idade = $idade anos!";
}

echo "<p class='division'>Spaceship</p><hr>";
var_dump(500 <=> 3);
echo "<br>";
var_dump(50 <=> 50);
echo "<br>";
var_dump(5 <=> 50);

echo "<p class='division'>Valores podem ser V ou F</p><hr>";
var_dump(!!5);
echo "<br>";
var_dump(!!0);
echo "<br>";
var_dump(!!"");
echo "<br>";
var_dump(!!" ");