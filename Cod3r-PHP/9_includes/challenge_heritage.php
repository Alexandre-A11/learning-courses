<div class="title">Desafio do Módulo</div>

<?php
const BR = "<br>";

require_once("challenge_heritage_usuario.php");
$usuario = new Usuario("Gustavo Mendonça", 21, "gust_mend");
echo $usuario->apresentar();

unset($usuario);
