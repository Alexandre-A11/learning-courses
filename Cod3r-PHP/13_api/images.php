<div class="title">Images</div>

<?php
session_start();

$arquivos = $_SESSION['arquivos'] ?? [];

$pastaUpload = __DIR__ . '/../files/';
$nomeArquivo = $_FILES['arquivo']['name'];
$arquivo = $pastaUpload . $nomeArquivo;
$tmp = $_FILES['arquivo']['tmp_name'];
if (move_uploaded_file($tmp, $arquivo)) {
    echo "<br>Arquivo válido e enviado com sucesso.";
    $arquivos[] = $nomeArquivo;
    $_SESSION['arquivos'] = $arquivos;
} else {
    echo "<br>Erro no upload de arquivo!";
}
?>

<form action="#" method="post" enctype="multipart/form-data">
    <input name="arquivo" type="file">
    <button>Enviar</button>
</form>

<ul>
    <?php foreach ($arquivos as $arquivo) : ?>
        <?php if (strpos($arquivo, ".png")) : ?>
            <li>
                <img src="files/<?= $arquivo ?>" height=100 width=100 alt="">
            </li>
        <?php endif ?>
    <?php endforeach ?>
</ul>


<style>
    input,
    button {
        font-size: 1.2rem;
    }
</style>