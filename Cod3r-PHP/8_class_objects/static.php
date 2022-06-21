<div class="title">Membros Estáticos</div>

<?php
const BR = "<br>";
class A {
    public $naoStatic = "Variável de instância";
    public static $static = "Variável de classe (estática)";

    public function mostrarA() {
        echo "Não estática = {$this->naoStatic}" . BR;
        // Tentativa 1:
        // echo "Estática = {$this->static}" . BR; //Errado
        // Tentativa 2:
        // echo "Estática = {self::$static}" . BR; //Errado
        // Tentativa 3:
        echo "Estática = " . self::$static . BR;
    }

    public static function mostrarStaticA() {
        // echo "Não estática = {$this->naoStatic}" . BR;//Não é possível acessar
        // echo "Estática = {$static}" . BR; //Errado
        echo "Estática = " . self::$static . BR;
    }
}

// $objetoA = new A();
// $objetoA->mostrarA();
// $objetoA->mostrarStaticA(); //Funciona, mas não é a forma ideal de acessar função estática.
echo A::$static . BR; // Acessa diretamente pela classe.
A::mostrarStaticA(); // Acessa diretamente pela classe.

A::$static = "Alterado membro de classe!";
echo A::$static . BR;
