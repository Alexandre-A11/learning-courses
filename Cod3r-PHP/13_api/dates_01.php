<div class="title">Dates #01</div>

<?php
// https://devhints.io/datetime
echo time() . "<br>";
setlocale(LC_TIME, "pt_BR", "pt_BR.utf-8");
echo date("D, d \d\e M \d\e Y H:i A");
echo "<br>";
echo strftime("%A, %d de %B de %Y %H:%M %p"); // deprecated in PHP 8.1
echo "<br>";
setlocale(LC_TIME, "pt_BR", "pt_BR.utf-8");
echo strftime("%A, %d de %B de %Y %H:%M %p"); // deprecated in PHP 8.1

$amanha = time() + (24 * 60 * 60);
echo strftime("%A, %d de, %B de %Y") . "<br>"; // deprecated in PHP 8.1


$proximaSemana = strtotime("+1 week");
echo strftime("%A, %d de %B de %Y %H:%M %p", $proximaSemana) . "<br>"; // deprecated in PHP 8.1


$dataFixa = mktime(15, 30, 50, 1, 25, 1975);
echo strftime("%A, %d de %B de %Y - %H:%M:%S", $dataFixa); // deprecated in PHP 8.1

echo "<br>";
$date = new DateTime('%d');
echo $date;
