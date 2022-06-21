<!-- 
Sobrescreva o método ind div para...
- Lançar uma exceção quando tentar dividir por zero;
- Lançar uma exceção quando o resultado não for inteiro;
- Dividir normalmente nos demais casos.

Os testes...
- intdiv com os paremetros 8 e 2 [Sucesso];
- intdiv com os paremetros 8 e 3 [Exceção];
- intdiv com os paremetros 8 e 0 [Exceção];
- intdiv "original" com os parametros 8 e 3 [Sucesso]. 
-->
<div class="title">Desafio intdiv</div>

<?php
require_once("challenge_intdiv.php");

use function \Aritmetica\intdiv;

try {
    echo intdiv(8, 3) . "<br>";
} catch (\Aritmetica\NaoInteiroException $e) {
    echo "Resultado não é um número inteiro<br>";
}

try {
    echo intdiv(8, 0) . "<br>";
} catch (DivisionByZeroError $e) {
    echo "Divisão por zero<br>";
}

echo intdiv(8, 2) . "<br>";
echo \intdiv(8, 2) . "<br>";
echo \intdiv(8, 3) . "<br>";
