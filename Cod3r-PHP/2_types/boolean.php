<div class="title">Tipo Booleano</div>

<?php
echo TRUE;
echo "<br>";
echo FALSE;

echo "<br>" . var_dump(true);
echo "<br>" . var_dump(False);
echo "<br>" . var_dump("false");
echo "<br>" . is_bool(false);
echo "<br>" . is_bool("true");

// Regras de Conversões
echo "<p>Regras:</p>";
echo "<br>" . var_dump((bool) 0); // Apenas 0 é false.
echo "<br>" . var_dump((bool) 20);
echo "<br>" . var_dump((bool) -1);
echo "<br>" . var_dump((bool) 0.0);
echo "<br>" . var_dump((bool) 0.00000001);
echo "<br>" . var_dump((bool) ""); // False
echo "<br>" . var_dump((bool) "0"); // False
echo "<br>" . var_dump((bool) " "); // True
echo "<br>" . var_dump((bool) "00"); // True
echo "<br>" . var_dump((bool) "false"); // True

echo "<br>" . var_dump(!"false"); // False
