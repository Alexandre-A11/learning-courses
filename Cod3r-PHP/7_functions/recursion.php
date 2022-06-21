<div class="title">Recursividade</div>

<?php
// Método 1:
function somaRetornando($num) {
    $resultado = 1;
    for ($i = $num; $i > 1; $i--) {
        echo $i . "*" . $resultado . "<br>";
        $resultado *= $i;
    }
    return $resultado;
}

// Método 2:
function somaUmAte($num) {
    $resultado = 1;
    for ($i = 1; $i < $num; $i++) {
        $resultado *= $i + 1;
        echo "$resultado *" . $i + 1 . "<br>";
    }
    return $resultado;
}

// Método 3:
function somaRecursivaUmAte($num) {
    $resultado = 0;
    for (; $num >= 1; $num--) {
        $resultado += $num;
    }
    return $resultado;
}

function recursividade($num) {
    if ($num === 1) return 1; // Condição de Parada!!!
    return $num + recursividade($num - 1);
}

echo recursividade(3) . "<br>";

function somaRecursivaEconomica($num) {
    return $num === 1 ? 1 : $num * somaRecursivaEconomica($num - 1);
}

echo somaRecursivaEconomica(7) . "<br>";
