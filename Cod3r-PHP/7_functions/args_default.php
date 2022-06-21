<div class="title">Argumento Padrão</div>

<?php
function saudacao($nome = "Senhor(a)", $sobrenome = "Cliente")
{
    return "Bem vindo, $nome $sobrenome!<br>";
}

echo saudacao();
echo saudacao(null);
echo saudacao(null, null);
echo saudacao("Mestre", "Supremo");

echo "<hr>";

function anotarPedido($comida, $bebida = "Água")
{
    echo "Para comer: $comida <br>";
    echo "Para bebida: $bebida <br>";
}

anotarPedido("Hamburguer");
anotarPedido("Pizza", "Hamburguer");

echo "<hr>";

function anotarPedido2($bebida = "Água", $comida)
{
    echo "Para comer: $comida <br>";
    echo "Para bebida: $bebida <br>";
}

// anotarPedido2("Hamburguer");
anotarPedido2("Refrigerante", "Pizza");