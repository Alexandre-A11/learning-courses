<div class="title">Include Once</div>

<?php
ini_set("display_errors", 1);

include("include_once_file.php");
require("include_once_file.php"); // Não gera erro devido ao !function_exits()

echo "Variável = '{$variavel}'.<br>";
$variavel = "Variável Alterada";
echo "Variável = '{$variavel}'.<br>";

include("include_once_file.php");
echo "Variável = '{$variavel}'.<br>";
$variavel = "Variável Alterada";
echo "Variável = '{$variavel}'.<br>";

include_once("include_once_file.php");
echo "Variável = '{$variavel}'.<br>";

require_once("include_once_file.php");
echo "Variável = '{$variavel}'.<br>";
