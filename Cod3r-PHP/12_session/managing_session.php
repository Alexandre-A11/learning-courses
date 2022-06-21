<div class="title">Gerenciando Sessão</div>

<?php
// session_id("67seloegb4p3tgia7h5jgfqni4"); // Deve ser adicionada antes do session_start();
session_start();
echo session_id();


$contador = &$_SESSION["contador"];
$contador = $contador ? $contador + 1 : 1;
echo "<br>" . $_SESSION["contador"];

if ($_SESSION["contador"] % 5 === 0) {
    session_regenerate_id();
}

if ($_SESSION["contador"] >= 15) {
    session_destroy();
}
