<div class="title">Desafio Operadores Lógicos</div>

<!--
  Dois trabalhos -> terça e quinta!
- Se os dois forem executados -> TV 50' e Sorvete
- Se apenas um for executado -> TV 32' e Sorvete
- Se nenhum for executado -> Fica em casa mais saudável!
 -->

 <style>
     button, select {
         font-size: 1.8rem;
     }
 </style>

 <form action="#" method="post">
     <div>
         <label for="t1">Trabalho 1 (Terça):</label>
         <select name="t1" id="t1">
             <option value="1">Executado</option>
             <option value="0">Não Executado</option>
         </select>
     </div>
     <div>
         <label for="t2">Trabalho 2 (Quinta):</label>
         <select name="t2" id="t2">
             <option value="1">Executado</option>
             <option value="0">Não Executado</option>
         </select>
     </div>
     <button>Executar</button>
 </form>

<?php
if (isset($_POST["t1"]) && isset($_POST["t2"])){
    
    echo "Trabalho 1: " . var_dump((bool) $_POST["t1"]) . "<br>";
    echo "Trabalho 2: " . var_dump(!!$_POST['t2']) . "<br>";
    
    $t1 = (bool) $_POST["t1"];
    $t2 = !!$_POST["t2"];
    
    if ($t1 && $t2){
        echo "TV 50' e Sorvete";
    } else if ($t1 || $t2){
        echo "TV 32' e Sorvete";
    } else {
        echo "Fica em casa mais saudável!";
    }
}