<div class="title">Desafio Tabela #01</div>

<?php
$matriz = [
    ["01", "02","03","04","05"],
    ["06", "07","08","09","10"],
    ["11", "12","13","14","15"],
    ["16", "17","18","19","20"],
];

foreach ($matriz as $linha){
    foreach($linha as $valor){
        echo "$valor ";
    }
    echo "<br>";
}

echo "<hr>";
echo "Tabela 1" . "<table>";
foreach ($matriz as $linhas){
    echo "<tr>";
    foreach ($linhas as $valor){
        echo "<td>$valor</td>";
    }
    echo "</tr>";
    
}
echo "</table>";

echo "<br><hr>Tabela 2<table>";
foreach ($matriz as $index => $linhas){
    echo $index % 2 === 0 ? "<tr style='background-color:DodgerBlue;'>" : "<tr>";
    foreach ($linhas as $valor){
        echo "<td>$valor</td>";
    }
    echo "<tr>";
}
echo "</table>"
?>

<style>
    table {
        border: 1px solid #444;
        border-collapse: collapse;
        margin: 20px 0;
    }

    table tr {
        border: 1px solid #444;
    }
    
    table td {
        border: 1px solid #444;
        padding: 10px 20px;
    }
 </style>