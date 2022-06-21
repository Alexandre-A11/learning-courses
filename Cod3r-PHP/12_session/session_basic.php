<div class="title">Sessão</div>

<?php
session_start();

print_r($_SESSION);
echo "<br>";

if (!$_SESSION["nome"]) {
    $_SESSION["nome"] = "Alexandre";
}

if (!$_SESSION["email"]) {
    $_SESSION["email"] = "ale.mail@mail.com";
}

?>

<p>
    <a href="/12_session/change_session_basic.php">
        Alterar Sessão
    </a>
</p>

<?php
$_SESSION["email"] = "ale.mail2222@mail.com";
