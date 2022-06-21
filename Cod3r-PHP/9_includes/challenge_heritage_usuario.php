<?php
require_once("challenge_heritage_pessoa.php");
class Usuario extends Pessoa {
    public $login;

    function __construct($nome, $idade, $login) {
        // Método 1:
        // $this->nome = $nome;
        // $this->idade = $idade;

        // Método 2:
        parent::__construct($nome, $idade);
        $this->login = $login;
    }

    // Caso essa função seja desativada, apresentar de Pessoa será usado como Herança.
    // Função Sobrescrita
    public function apresentar() {
        // Método 1:
        // echo "@{$this->login}: {$this->nome}, {$this->idade} anos" . BR;
        // Método 2:
        $login =  "@{$this->login}: ";
        return $login . parent::apresentar();
    }
}
