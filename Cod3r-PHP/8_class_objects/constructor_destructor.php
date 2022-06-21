<div class="title">Construtor & Destrutor</div>

<?php
class Pessoa {
    public $nome;
    public $idade;

    function __construct($novoNome, $idade = 18) {
        echo "Construtor Invocado!" . BR;
        $this->nome = $novoNome;
        $this->idade = $idade;
    }

    function __destruct() {
        echo "E morreu!" . BR;
    }

    public function apresentar() {
        echo "{$this->nome}, {$this->idade} anos." . BR;
    }
}
const BR = "<br>";

// $pessoa = new Pessoa(); // Não funciona, devido ao contrutor.
$pessoaA = new Pessoa("Karen", 29);
$pessoaA->apresentar();
unset($pessoaA);

$pessoaB = new Pessoa("Lucas");
$pessoaB->apresentar();
$pessoaB = null;
