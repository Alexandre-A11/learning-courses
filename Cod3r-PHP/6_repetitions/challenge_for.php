<div class="title">Desafio For</div>

<!-- 
    Usar o for...
    #
    ##
    ###
    ####
    #####
    1) Pode usar incremento $i++
    1) Não pode usar incremento $i++
 -->

 <?php
 echo "Com Incremento:<br>";
 for($i = 0; $i < 5; $i++){
     echo $i + 1 . ") ";
     for($j = 0; $j <= $i; $j++){
         echo "#";
        }
        echo "<br>";
    }

echo "<br>";

echo "Sem Incremento:<br>";
for($hashtag = "#"; strlen($hashtag) <= 5; $hashtag .= "#"){
    echo $hashtag . "<br>";
}