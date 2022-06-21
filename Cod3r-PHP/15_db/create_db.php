<div class="title">Criar Banco</div>

<?php
require_once "connection.php";

$conexao = newConnection(null);
$sql = "CREATE DATABASE IF NOT EXISTS curso_php";

$resultado = $conexao->query($sql);

if ($resultado) {
    echo "Banco criado com sucesso!";
} else {
    echo "Erro: " . $conexao->error;
}

$conexao->close();
