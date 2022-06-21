<?php

function newConnection($banco = "curso_php") {
    $servidor = "127.0.0.1";
    $usuario = "root";
    $senha = "root";

    $conexao = new mysqli($servidor, $usuario, $senha, $banco);

    if ($conexao->connect_error) {
        die("Erro de conexão: " . $conexao->connect_error);
    }

    return $conexao;
}
