<div class="title">Visibilidade</div>

<?php
const BR = "<br>";

class A {
    public $publico = "Público";
    protected $protegido = "Protegido";
    private $privado = "Privado";

    public function mostrarA() {
        // $this->notShow();
        echo "Class A) Público = {$this->publico}" . BR;
        echo "Class A) Protegido = {$this->protegido}" . BR;
        echo "Class A) Privado = {$this->privado}" . BR;
    }

    protected function vaiPorHeranca() {
        echo "Serei transmitido por herança!" . BR;
    }

    private function notShow() {
        echo "Não vou imprimir!" . BR;
    }
}


$a = new A();
$a->mostrarA();
// $a->notShow();

class B extends A {
    public function mostrarB() {
        echo "Class B) Público = {$this->publico}" . BR;
        echo "Class B) Protegido = {$this->protegido}" . BR;
        echo "Class B) Privado = {$this->privado}" . BR;

        parent::vaiPorHeranca();
    }
}
echo BR;
$b = new B();
$b->mostrarB();
echo BR;
$b->mostrarA();
// $b->vaiPorHeranca():
// $b->notShow();
