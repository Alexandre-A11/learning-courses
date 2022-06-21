<div class="title">Operadores Lógicos</div>



<?php
echo "<p class='division'>Negação Lógica</p>";
var_dump(true);
echo "<br>";
var_dump(!true);

echo "<p class='division'>Tabela Verdade 'AND' (E)</p><hr>";
var_dump(true && true);
echo "<br>";
var_dump(true && false);
echo "<br>";
var_dump(false and true);
echo "<br>";
var_dump(false and false);
echo "<br>";
var_dump(true && 3 > 2 && 7 <= 7);
echo "<br>";

echo "<p class='division'>Tabela Verdade 'OR' (OU)</p><hr>";
var_dump(true || true);
echo "<br>";
var_dump(false || false);
echo "<br>";
var_dump(false or true);
echo "<br>";
var_dump(true or false);
echo "<br>";

echo "<p class='division'>Tabela Verdade 'XOR' (OU Exclusivo)</p><hr>";
var_dump(true xor true);
echo "<br>";
var_dump(false xor false);
echo "<br>";
var_dump(false xor true);
echo "<br>";
var_dump(true xor false);
echo "<br>";

var_dump(true != true);
echo "<br>";
var_dump(false != false);
echo "<br>";
var_dump(false != true);
echo "<br>";
var_dump(true != false);
echo "<br>";

echo "<p class='division'>Exemplo</p><hr>";
$idade = 62;
$sexo = "F";

$pagouPrevidencia = true;

$criterioHomem = ($idade >= 65 && $sexo === "M");
$criterioMulher = ($idade >= 60 && $sexo === "F");
$atingiuCriterio = $criterioHomem || $criterioMulher;
$podeSeAposentar = $pagouPrevidencia && $atingiuCriterio;
echo "Pode se aposentar -> $podeSeAposentar.<br>";

if ($idade >= 60 && $sexo === "F") {
    echo "Pode se aposentar -> $sexo";
} else if ($idade >= 65 && $sexo === "M"){
    echo "Pode se aposentar -> $sexo";
} else {
    echo "Vai ter que trabalhar mais um pouco...";
}