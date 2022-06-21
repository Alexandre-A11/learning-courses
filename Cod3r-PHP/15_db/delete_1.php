<div class="title">Excluir Registro #01</div>

<?php
require_once "connection.php";

$sql = "DELETE FROM cadastro WHERE id = 2";

$conexao = newConnection();

$resultado = $conexao->query($sql);

if ($resultado) {
    echo "Registro excluído com sucesso!";
} else {
    echo "Erro ao excluir o registro: " . $conexao->error;
}

$conexao->close();
// sdsadsdads