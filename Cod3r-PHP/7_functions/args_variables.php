<div class="title">Argumentos & Variáveis</div>

<?php
function soma($a, $b)
{
    return $a + $b;
}

echo soma(14, 15, 6, 7, 8, 9) . "<br>";
echo soma(6, 5, 4) . "<br>";
echo "<br><hr>";

function somaCompleta(...$numeros)
{
    print_r($numeros);
    echo "<br><hr>";
    $soma = 0;
    foreach ($numeros as $num) {
        $soma += $num;
    }
    return $soma;
}

echo somaCompleta(1, 2, 3, 4, 5) . "<br><hr>";

$array = [6, 7, 8];
echo somaCompleta(...$array) . "<br><hr>";
// echo somaCompleta($array) . "<br><hr>";

function membros($titular, ...$dependentes)
{
    echo "Titular: $titular <br>";
    if ($dependentes) {
        foreach ($dependentes as $dep) {
            echo "Dependente: $dep <br>";
        }
    }
}

echo "<br>";
membros("Ana Silva", "Pedro", "Rafaela", "Amanda");