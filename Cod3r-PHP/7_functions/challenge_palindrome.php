<div class="title">Desafio Palindromo</div>

<?php

function polindrome($word){
    $word_reversed = null;
    for ($i = strlen($word) - 1; $i >= 0; $i--){
        $word_reversed .= $word[$i]; 
    }

    return strtolower($word) === strtolower($word_reversed) ? "É um palindromo! 😃" : "Não é um palindromo. 😥";
}

echo polindrome("arara") . "<br>";
echo polindrome("ana") . "<br>";
echo polindrome("ovo") . "<br>";
echo polindrome("bola") . "<br>";

echo "<br><hr>";

function polindromeSimples($word){
    return strtolower($word) === strtolower(strrev($word)) ? "Sim" : "Não";
}


echo polindromeSimples("arara") . "<br>";
echo polindromeSimples("ana") . "<br>";
echo polindromeSimples("ovo") . "<br>";
echo polindromeSimples("bola") . "<br>";