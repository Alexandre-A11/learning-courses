<div class="title">Operações Aritméticas</div>

<?php
echo 1 + 1, "<br>";
var_dump(1 + 1.0);
echo "<br>";
echo 1 + 2.5, "<br>";
echo 10 - 2, "<br>";
echo 2 * 5, "<br>";
echo 7 / 4, "<br>"; // Float
echo intdiv(7, 4), "<br>"; // Int
echo round(7 / 4), "<br>";
echo 7 % 4, "<br>";
echo 7 / 0.0001, "<br>";
// echo intdiv(7, 0), "<br>"; # erro
echo 4 ** 2, "<br>";

// Precedência de operadores:
// () => ** => / * % => + -
echo "<p>Precedência</p>";
echo 2 + 3 * 4, "<br>";
echo (2 + 3) * 4, "<br>";
echo 2 + 3 * 4 ** 2, "<br>";
echo ((2 + 3) * 4) ** 2, "<br>";