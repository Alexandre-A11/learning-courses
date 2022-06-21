<div class="title">Desafio Recursão</div>

<?php

/*
$array = [1, 2, [3, 4, 5], 6, [7, [8, 9]], 10];
> 1
> 2
>> 3
>> 4
>> 5
> 6
>> 7
>>> 8
>>> 9
> 10
*/

$array = [1, 2, [3, 4, 5], 6, [7, [8, 9]], 10];

function recursion($array, $symbol = ">") {
    foreach ($array as $element) {
        echo is_array($element) ? recursion($element, $symbol . $symbol[0]) : $symbol . $element . "<br>";
    }
}

recursion($array);
