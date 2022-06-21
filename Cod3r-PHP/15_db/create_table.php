<div class="title">Criar Tabela</div>

<?php
require_once "connection.php";

// DDL - Data Definition Lang.
$sql = "CREATE TABLE IF NOT EXISTS cadastro (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nascimento DATE,
    email VARCHAR(100) NOT NULL,
    site VARCHAR(100),
    filhos INT,
    salario FLOAT
)";

$conexao = newConnection();
$resultado = $conexao->query($sql);

if ($resultado) {
    echo "Tabela criada com sucesso!";
} else {
    echo "Erro: " . $conexao->error;
}

$conexao->close();
