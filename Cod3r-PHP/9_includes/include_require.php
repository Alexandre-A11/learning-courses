<div class="title">Include vs Require</div>

<?php
include("include_file.php");

ini_set("display_errors", 1);

echo "Usando include com arquivo inexistente..." . BR;
include("arquivo_inexistente.php");

echo "Usando require com arquivo inexistente..." . BR;
require("arquivo_inexistente.php");

echo "Não achou o mesmo..." . BR;
