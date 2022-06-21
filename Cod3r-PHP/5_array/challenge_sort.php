<div class="title">Desafio Sorteio</div>

<?php
$nomes = ["Elza", "Rapunzel", "Branca de Neve", "Cinderela"];

$index = array_rand($nomes);
$nome = $nomes[$index];
echo "<div center><h1>$nome</h1></div>";
?>

<style>
    [center] {
        display: flex;
        justify-content: center;
    }
</style>