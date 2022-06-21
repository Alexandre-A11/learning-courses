<div class="title">Desafio Classe</div>

<?php
class Data {
    public $day = 1;
    public $month = 1;
    public $year = 1970;

    public function apresentar() {
        $day = $this->day < 10 ? "0{$this->day}" : $this->day;
        $month = $this->month < 10 ? "0{$this->month}" : $this->month;
        return "{$day}/{$month}/{$this->year}";
    }
}

const BR = "<br>";

$today = new Data();
$today->day = 9;
$today->month = 3;
$today->year = 2022;

echo $today->apresentar() . BR;

$tomorrow = new Data();
$tomorrow->day = 10;
$tomorrow->month = 4;
$tomorrow->year = 2022;

echo $tomorrow->apresentar();
