<div class="title">Map</div>

<?php
$dados = array(
    "idade" => 25, 
    "cor" => "verde",
    "peso" => 49.8,
);

print_r($dados);

echo $dados[0];
var_dump($dados[0]);

echo "<br><br>" . $dados["idade"];
echo "<br>" . $dados["cor"];
echo "<br>" . $dados["peso"];
echo "<br>";
var_dump($dados["outra_informacao"]);

$lista = array(
    "a",
    "cinco" => "b",
    "c",
    8 => "d",
    "e",
    6 => "f",
    "g",
    8 => "h",
);

echo "<br>";
print_r($lista);

$lista[] = "i";
echo "<br>";
print_r($lista);

$lista["vinte"] = "j";
echo "<br>";
print_r($lista);