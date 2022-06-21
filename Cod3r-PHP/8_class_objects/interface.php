<div class="title">Interface</div>

<?php
const BR = "<br>";

interface Animal {
    function respirar();
}

interface  Mamifero {
    function mamar();
}

interface Canino extends Animal, Mamifero {
    function latir(): string;
    function correr();
}

interface Felino {
    function correr();
}

class Cachorro implements Canino {
    function respirar() {
        echo "Irei usar oxigênio!";
    }

    function latir(): string {
        return "au au";
    }

    function mamar() {
        return "irei usar leite!";
    }

    function correr() {
        return "vrummm";
    }
}

$animal = new Cachorro();
echo $animal->respirar() . BR;
echo $animal->latir() . BR;
echo $animal->mamar() . BR;
echo $animal->correr() . BR;

echo BR;
var_dump(($animal));

echo BR;
var_dump(($animal instanceof Cachorro));
var_dump(($animal instanceof Canino));
var_dump(($animal instanceof Mamifero));
var_dump(($animal instanceof Animal));
var_dump(($animal instanceof Felino));
