<div class="title">Require & Return</div>

<?php
$valorRetorno = require("return_used.php");
echo "$valorRetorno<br>";
echo "$variavelRetornada<br>";

echo __DIR__ . "<br>";

$valorRetorno2 = include(__DIR__ . "/return_not_used.php"); // Retorna V/F lembrando que a função require irá gerar um fatal error, caso seja falsa.
// var_dump($valorRetorno2);
echo "$valorRetorno2<br>";
echo "$variavelDeclarada<br>";
