<?php
class Pessoa {
    public $nome;
    public $idade;

    function __construct($novoNome, $idade) {
        $this->nome = $novoNome;
        $this->idade = $idade;
    }

    public function apresentar() {
        return "{$this->nome}, {$this->idade} anos";
    }
}
