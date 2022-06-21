<div class="title">Closure & Callable</div>


<?php
$soma1 = function ($a, $b) {
    return $a + $b;
};


function soma2($a, $b) {
    return $a + $b;
};

echo $soma1(2, 3) . " ";
echo (is_callable($soma1) ? "Sim" : "Não") . "<br>";


// echo $soma1 = 1 . " ";
// echo (is_callable($soma1) ? "Sim" : "Não") . "<br>";

echo soma2(2, 3) . " ";
echo (is_callable($soma2) ? "Sim" : "Não") . "<br>";

var_dump($soma1);

echo "<br><hr>";

function executar1($a, $b, $operador, callable $funcao) {
    $resultado = $funcao($a, $b);
    echo "$a $operador $b = $resultado<br>";
}


executar1(2, 3, "+", $soma1);
executar1(2, 3, "+", "soma2");

echo "<br><hr>";

function executar2($a, $b, $operador, Closure $funcao) {
    $resultado = $funcao($a, $b);
    echo "$a $operador $b = $resultado<br>";
}


executar2(100, 100, "+", $soma1);
// executar2(200, 300, "+", "soma2"); Não funciona.
