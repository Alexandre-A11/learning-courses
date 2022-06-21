<?php

const BR = "<br>";

echo "Carregando include_file<br>";

$variavel = "Estou definida";


if (!function_exists("soma")) {
    function soma($a, $b) {
        return $a + $b;
    }
}
