<div class="title">Map & Filter</div>

<?php
$notas = [5.8, 7.3, 9.8, 6.7];
$notasFinais1 = [];;

foreach ($notas as $nota) {
    $notasFinais1[] = round($nota);
}

print_r($notasFinais1);

echo "<br><hr>";
$notasFinais2 = array_map("round", $notas);
print_r($notasFinais2);

$apenasAprovados1 = [];

foreach ($notas as $nota) {
    if ($nota >= 7) {
        $apenasAprovados1[] = $nota;
    }
}
echo "<br>";
print_r($apenasAprovados1);

echo "<br><hr>";

function aprovados($nota) {
    return $nota >= 7;
}

echo "<br>";

$apenasAprovados2 = array_filter($notas, "aprovados");
print_r($apenasAprovados2);

echo "<br><hr>";

function calculoLegal($nota) {
    $notaFinal = round($nota) + 1;
    return $notaFinal > 10 ? 10 : $notaFinal;
}

$notasFinais3 = array_map("calculoLegal", $notas);
print_r($notasFinais3);
