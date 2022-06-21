<div class="title">While/Do While</div>

<?php
const VALOR_LIMITE = 5;
$contador = 0;

while ($contador < VALOR_LIMITE){
    echo "while $contador <br>";
    $contador++;
}

echo "<br><hr>";

$contador = 0;
do {
    echo "do-while $contador <br>";
    $contador++;
} while($contador < VALOR_LIMITE);


echo "<br><hr>";

$contador = 0;
while($contador < VALOR_LIMITE) {
    echo "while(true) $contador <br>";
    $contador++;
    if ($contador >= VALOR_LIMITE){
        break;
    }
}
