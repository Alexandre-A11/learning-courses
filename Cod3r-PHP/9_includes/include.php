<div class="title">Include</div>

<?php
echo "Executei essa linha do arquivo include<br>";
include("include_file.php");
// include("include_file.php");

echo "<br>" . soma(3, 8) . "!<br>";
echo "O conteúdo da variável é '{$variavel}'.";


// Obs: O "include" pode ser chamado para o mesmo arquivo, mais de uma vez;
// Entretanto, é necessário tomar cuidado caso exista mais de algum elemento no arquivo a ser incluido,
// que não aceite ser duplicado. Como por exemplo, a função "soma", para resolver é possível
// usar !function_exists()