<div class="title">Include Função</div>

<?php
echo "Carregado: include_function<br>";

function carregarArquivo() {
    include("include_file.php");

    echo $variavel . BR;
    echo soma(2, 5) . "!" . BR;
}

echo "Novamente no arquivo include_function<br>";
// echo soma(1, 8) . "!" . BR;

carregarArquivo();

echo "Variável = '{$variavel}'.";
var_dump($variavel);
echo BR . soma(3, 8);
