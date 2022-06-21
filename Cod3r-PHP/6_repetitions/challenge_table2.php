<div class="title">Desafio Tabela #02</div>

<style>
    form * {
        font-size: 1.8rem;
    }

    form > div {
        margin-bottom: 10px;
    }

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

 <form action="#" method="post">
    <div>
        <label for="linhas">Linhas:</label>
        <input type="number" value=<?= $_POST["linhas"] ?? 5 ?> name="linhas">
    </div>
    <div>
        <label for="colunas">Colunas:</label>
        <input type="number" value=<?= $_POST["colunas"] ?? 5 ?> name="colunas">
    </div>
    <button>Gerar Tabela</button>
 </form>

 <hr>

 <table>
    <?php
        $colunas = (int) $_POST["colunas"];
        $linhas = (int) $_POST["linhas"];
        $valor = 1;

        if (!$linhas) $linhas = 5;
        if (!$colunas) $colunas = 5;
        for ($i = 0; $i < $linhas; $i++){
            echo "<tr>";
            for ($j = 0; $j < $colunas; $j++){
                echo "<td>$valor</td>";
                $valor++;
            }
            echo "</tr>";
        }
    ?>
 </table>