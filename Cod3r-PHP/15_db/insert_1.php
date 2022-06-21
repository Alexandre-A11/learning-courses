<div class="title">Inserir Registro #01</div>

<?php

require_once "connection.php";

$sql = "INSERT INTO cadastro (nome, nascimento, email, site, filhos, salario) 
VALUES (
    'Karen Ludwig',
    '1991-09-01',
    'karen@email.com',
    'https://karen.com.br',
    1,
    15000.00
    )";

$conexao = newConnection();
$resultado = $conexao->query($sql);

if ($resultado) {
    echo "Registro inserido com sucesso!";
} else {
    echo "Erro: " . $conexao->error;
}

$conexao->close();
