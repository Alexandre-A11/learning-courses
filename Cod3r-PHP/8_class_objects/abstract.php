<div class="title">Classe Abstrata</div>

<?php
const BR = "<br>";

abstract class Abstrata {
    abstract public function metodo1();
    // public abstract  function metodo1(); // ambos funcionam
    abstract protected function metodo2($parametro);
}

abstract class FilhaAbstrata extends Abstrata {
    public function metodo1() {
        echo "Executando método 1" . BR;
    }

    abstract public function metodo3();
}

class Concreta extends FilhaAbstrata {
    public function metodo1() {
        parent::metodo1();
        echo "Executando método 1 extendido" . BR;
    }

    protected function metodo2($parametro) {
        echo "Executando método 2, com parametro $parametro" . BR;
    }

    public function metodo3() {
        echo "Executando método 3" . BR;
        $this->metodo2("Interno");
    }
}

$c = new Concreta();
$c->metodo1();
// $c->metodo2("Externo");
$c->metodo3();

echo BR;
var_dump($c);

echo BR;
var_dump($c instanceof Concreta);
var_dump($c instanceof FilhaAbstrata);
var_dump($c instanceof Abstrata);


echo "Fim!";
