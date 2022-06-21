<div class="title">Herança</div>

<?php
class Pessoa {
    public $nome;
    public $idade;

    function __construct($novoNome, $idade) {
        $this->nome = $novoNome;
        $this->idade = $idade;
        echo "Pessoa Criada!" . BR;
    }

    function __destruct() {
        echo "Pessoa diz: Tchau!";
    }

    public function apresentar() {
        echo "{$this->nome}, {$this->idade} anos" . BR;
    }
}

class Usuario extends Pessoa {
    public $login;

    function __construct($nome, $idade, $login) {
        // Método 1:
        // $this->nome = $nome;
        // $this->idade = $idade;

        // Método 2:
        parent::__construct($nome, $idade);
        $this->login = $login;
        echo "Usuário Criado!" . BR;
    }

    function __destruct() {
        echo "Usuário diz: Tchau!" . BR;
        parent::__destruct();
    }

    // Caso essa função seja desativada, apresentar de Pessoa será usado como Herança.
    // Função Sobrescrita
    public function apresentar() {
        // Método 1:
        // echo "@{$this->login}: {$this->nome}, {$this->idade} anos" . BR;
        // Método 2:
        echo "@{$this->login}: ";
        parent::apresentar();
    }
}
const BR = "<br>";

$usuario = new Usuario("Gustavo Mendonça", 21, "gust_mend");
$usuario->apresentar();

unset($usuario);
