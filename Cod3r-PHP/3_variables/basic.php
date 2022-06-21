<div class="title">Variáveis</div>

<?php
$numeroA = 13;
echo $numeroA, "<br>";
var_dump(($numeroA));

echo "<br>";
$a = 3;
$b = 16;
$soma = $a + $b;
echo $soma;

$soma = 0;
echo "<br>";

echo isset($soma);

unset($soma);
echo "<br>";
var_dump($soma);

$variavel = "Agora sou uma string!";
echo "<br>" . $variavel;

// Nomes de variáveis
$var = "Válida";
$var2 = "Válida";
$VAR3 = "Válida";
$_var_4 = "Válida";
$vár5 = "Válida, mas não recomendado";
// $6var = "Inválida";
// $%var7 = "Inválida"
// $var8% = "Inválida";

echo "<br>";
var_dump($_SERVER["HTTP_HOST"]);
