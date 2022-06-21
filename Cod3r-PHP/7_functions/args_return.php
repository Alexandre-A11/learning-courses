<div class="title">Argumentos & Retorno</div>

<?php
function obterMensagem() {
    return "Seja bem vindo(a)!";
}

obterMensagem();
$msg = obterMensagem();
echo $msg;
echo "<br>", obterMensagem();
echo "<br>";
var_dump(obterMensagem());

function obterMensagemComNome($nome) {
    return "Bem vindo(a), {$nome}!";
}

echo "<br>", obterMensagemComNome("Alexandre");
echo "<br>", obterMensagemComNome("Karen");

function soma($a, $b) {
    return $a + $b;
}

$x = 4;
$y = 5;

echo "<br>", soma(45, 78);
echo "<br>", soma($x, $y);

function trocaValor($a, $novoValor) {
    $a = $novoValor;
}

$variavel = 1;
trocaValor($variavel, 3);
echo "<br>", $variavel;

function trocaValorDeVerdade(&$a, $novoValor){
    $a = $novoValor;
}

trocaValorDeVerdade($variavel, 5000);
echo "<br>", $variavel;
