<div class="title">Switch</div>

<?php
$categoria = "Sedan";
$preco = 0.0;
$carro = "";

if ($categoria === "luxo") {
    $carro = "Mercedes";
    $preco = 250000;
} else if ($categoria === "SUV") {
    $carro = "Renegate";
    $preco = 80000;
} else if ($categoria === "Sedan") {
    $carro = "Etios";
    $preco = 55000;
} else {
    $carro = "Mobi";
    $preco = 33000;
}

$precoFormatado = number_format($preco, 2, ",", ".");
echo "<p>Carro: $carro<br>Preço: R$ $precoFormatado</p>";

$categoria = 'Luxo';
switch (strtolower($categoria)) {
    case 'luxo': {
        $carro = 'Mercedes';
        $preco = 250000;
        break;
    } // {} no case é opcional.
    case 'sub':
    case 'sub básico':
        $carro = "Renegate";
        $preco = 80000;
        break;
    case 'sedan':
        $carro = "Etios";
        $preco = 55000;
        break;
    default:
        $carro = "Mobi";
        $preco = 33000;
        break; // opcional 
}

echo $categoria;

$precoFormatado = number_format($preco, 2, ",", ".");
echo "<p>Carro: $carro<br>Preço: R$ $precoFormatado</p>";
