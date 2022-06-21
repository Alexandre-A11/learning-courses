<?php
session_start();
print_r($_SESSION);

$_SESSION["email"] = "alee.alterar@gmail.com";
?>

<p>
    <b>Nome: </b> <?= $_SESSION["nome"] ?> <br>
    <b>Email: </b> <?= $_SESSION["email"] ?>
</p>

<p>
    <a href="session_basic.php">Voltar</a>
</p>
<p>
    <a href="basic_session_clear.php">Limpar Sessão</a>
</p>