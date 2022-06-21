<div class="title">Desafio Switch</div>

<form action="#" method="post">
    <input type="text" name="param">
    <select name="conversao" id="conversao">
        <option value="km-milha">Km > Milha</option>
        <option value="milha-km">Milha > Km</option>
        <option value="metro-km">Metros > Km</option>
        <option value="km-metros">Km > Metros</option>
        <option value="celsius-fahrenheit">Celsius > Fahrenheit</option>
        <option value="fahrenheit-celsius">Fahrenheit > Celsius</option>
    </select>
    <button>Calcular</button>
</form>

<style>
    form > * {
        font-size: 1.8rem;
    }
</style>

<?php
// echo $_POST["param"] . " " . $_POST["conversao"];
const FATOR_KM_MILHA = 1.609;
const FATOR_METRO_KM = 1000;
const FAHRENHEIT_CELSIUS = 1.8 + 32;
// °F = °C × 1,8 + 32
// °C = (°F − 32) ÷ 1,8
if ($_POST["param"] !== "") {
    switch ($_POST["conversao"]){
        case "km-milha":
            $resultado = (float) $_POST["param"] / FATOR_KM_MILHA;
            echo number_format($resultado, 4, ",") . " Milhas";
            break;
        case "milha-km":
            $resultado = (float) $_POST["param"] * FATOR_KM_MILHA;
            echo $resultado . " Km";
            break;
        case "metro-km":
            $resultado = (int) $_POST["param"] / FATOR_METRO_KM;
            echo $resultado . " Km";
            break;
        case "km-metros":
            $resultado = (float) $_POST["param"] * FATOR_METRO_KM;
            echo number_format($resultado) . " Metros";
            break;
        case "celsius-fahrenheit":
            $resultado = $_POST["param"] * 1.8 + 32;
            echo $resultado . " Fahrenheit";
            break;
        case "fahrenheit-celsius":
            $resultado = ($_POST["param"] - 32) / 1.8;
            echo $resultado . " Celsius";
            break;
    }
    // * Método If/Else
    // if ($_POST["conversao"] === "km-milha") {
    //     $resultado = (float) $_POST["param"] / 1.609;
    //     echo number_format($resultado, 4, ",") . " Milhas";
    // } else if ($_POST["conversao"] === "milha-km"){
    //     $resultado = (float) $_POST["param"] * 1.609;
    //     echo number_format($resultado, 4, ",") . " Km";
    // } else if ($_POST["conversao"] === "metro-km") {
    //     $resultado = (float) $_POST["param"] / 1000;
    //     echo number_format($resultado, 4, ",") . " Km";
    // } else if ($_POST["conversao"] === "km-metros") {
    //     $resultado = (float) $_POST["param"] * 1000;
    //     echo number_format($resultado, 4, ",") . " Metros";
    // }
}