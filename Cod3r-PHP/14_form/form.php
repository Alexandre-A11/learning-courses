<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<div class="title">Formulário</div>

<h2>Cadastro</h2>

<?php
if (count($_POST) > 0) {
    $erros = [];

    if (!filter_input(INPUT_POST, "nome")) { // isset($_POST["nome"]) Também funciona
        $erros["nome"]  = "Nome é obrigatório";
    }

    if (filter_input(INPUT_POST, "nascimento")) {
        $data = DateTime::createFromFormat("d/m/Y", $_POST["nascimento"]);
        if (!$data) {
            $erros["nascimento"]  = "Data deve estar no padrão dd/mm/YYYY";
        }
    }

    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $erros["email"] = "Email inválido";
    }

    if (!filter_var($_POST['site'], FILTER_VALIDATE_URL)) {
        $erros["site"] = "Site inválido";
    }

    $filhosConfig = [
        "options" => ["min_range" => 0, "max_range" => 20]
    ];

    if (!filter_var($_POST['filhos'], FILTER_VALIDATE_INT, $filhosConfig) && $_POST['filhos'] != 0) {
        $erros["filhos"] = "Quantidade de filhos inválida (0-20).";
    }

    $salarioConfig = ["options" => ["decimal" => ","]];

    if (!filter_var($_POST['sal'], FILTER_VALIDATE_FLOAT, $salarioConfig)) {
        $erros["sal"] =  "Salário inválido";
    }
}
?>

<!-- 
<?php foreach ($erros as $erro) : ?>
    <div class="alert alert-danger" role="alert">
        <?= "" //$erro 
        ?>
    </div>
<?php endforeach; ?>
 -->

<form action="#" method="post">
    <div class="form-row">
        <div class="form-group col-md-9">
            <label for="nome">Nome</label>
            <input type="text" class="form-control <?= $erros['nome'] ? 'is-invalid' : '' ?>" id="nome" name="nome" placeholder="Nome" value="<?= $_POST['nome'] ?>">
            <div class="invalid-feedback">
                <?= $erros["nome"] ?>
            </div>
        </div>
        <div class="form-group col-md-3">
            <label for="nascimento">Nascimento</label>
            <input type="text" class="form-control <?= $erros['nascimento'] ? 'is-invalid' : '' ?>" id="nascimento" name="nascimento" placeholder="Data de Nascimento" value="<?= $_POST['nascimento'] ?>">
            <div class="invalid-feedback">
                <?= $erros["nascimento"] ?>
            </div>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="email">E-mail</label>
            <input type="text" class="form-control <?= $erros["email"] ? "is-invalid" : "" ?>" id="email" name="email" placeholder="E-mail" value="<?= $_POST['email'] ?>">
            <div class="invalid-feedback">
                <?= $erros["email"] ?>
            </div>
        </div>
        <div class="form-group col-md-6">
            <label for="site">Site</label>
            <input type="text" class="form-control <?= $erros["site"] ? "is-invalid" : "" ?>" id="site" name="site" placeholder="Site" value="<?= $_POST['site'] ?>">
            <div class="invalid-feedback">
                <?= $erros["site"] ?>
            </div>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="filhos">Qtd. de Filhos</label>
            <input type="number" class="form-control <?= $erros['filhos'] ? 'is-invalid' : "" ?>" id="filhos" name="filhos" placeholder="Qtd. de Filhos" value="<?= $_POST['filhos'] ?>">
            <div class="invalid-feedback">
                <?= $erros["filhos"] ?>
            </div>
        </div>
        <div class="form-group col-md-6">
            <label for="sal">Salário</label>
            <input type="text" class="form-control <?= $erros["sal"] ? "is-invalid" : "" ?>" id="sal" name="sal" placeholder="Salário" value="<?= $_POST['sal'] ?>">
            <div class="invalid-feedback">
                <?= $erros["sal"] ?>
            </div>
        </div>
    </div>
    <button class="btn btn-primary btn-lg">Enviar</button>
</form>