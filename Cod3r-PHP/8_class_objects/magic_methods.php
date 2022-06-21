<div class="title">Métodos Mágicos</div>

<?php
const BR = "<br>";
class Pessoa {
    public $nome;
    public $idade;

    function __construct($nome, $idade) {
        echo "Construtor invocado!" . BR;
        $this->nome = $nome;
        $this->idade = $idade;
    }

    function __destruct() {
        echo "E morreu!";
    }

    public function __toString() {
        return "{$this->nome} tem {$this->idade} anos.";
    }

    public function apresentar() {
        echo $this . BR;
    }

    public function __get($atrib) {
        echo "Lendo atributo não declarado: {$atrib}" . BR;
    }

    public function __set($atrib, $valor) {
        echo "Alternando atributo não declarado: {$atrib}/{$valor}";
    }

    public function __call($metodo, $params) {
        echo "Tentando executar método '${metodo}'.";
        echo ", com os parametros: ";
        print_r($params);
    }
}

$pessoa = new Pessoa("Ricardo", 40); // __construct
$pessoa->apresentar(); // chamando o __toString
echo $pessoa . BR; // chamando o __toString
$pessoa->nome = "Reinaldo";

// chama o método diretamente sem __call
$pessoa->apresentar();
echo $pessoa->nomeCompleto = "Muito Legal"; // __set
echo $pessoa->nomeCompleto; // __get

// acesso o atributo diretamente sem __get
echo $pessoa->nome;

// __call porque o método não existe no objeto.
$pessoa->exec(1, "teste", true, [1, 2, 3]);

$pessoa = null; // __destruct