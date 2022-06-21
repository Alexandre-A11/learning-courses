<?php
session_start();

$email = $_POST["email"];
$senha = $_POST["senha"];

if ($_POST["email"]) {
  $usuarios = [
    [
      "nome" => "Alexandre",
      "email" => "alee@cod3r.com",
      "senha" => "32244000"
    ],
    [
      "nome" => "Aluno Cod3r",
      "email" => "aluno@cod3er.com.br",
      "senha" => "123456",
    ],
    [
      "nome" => "Outro Aluno",
      "email" => "outro@email.com.br",
      "senha" => "654321",
    ]
  ];

  foreach ($usuarios as $usuario) {
    $emailValido = $email === $usuario["email"];
    $senhaValida = $senha === $usuario["senha"];

    if ($emailValido && $senhaValida) {
      $_SESSION["erros"] = null;
      $_SESSION["user"] = $usuario["nome"]; // "user" foi a variável que escolhi, linkado ao index.php 😁 
      $exp = time() + 60 * 60 * 24 * 30;
      setcookie("user", $usuario["nome"], $exp);
      header("Location: index.php");
    }
  }

  if (!$_SESSION["usuario"]) {
    $_SESSION["erros"] = ["Usuário/Senha inválida!"];
  }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <!-- prettier-ignore -->
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="stylesheet" href="assets/css/login.css" />
  <title>Curso PHP</title>
</head>

<body class="login">
  <header class="header-class">
    <h1>Curso PHP</h1>
    <h2>Seja bem-vindo!</h2>
  </header>
  <main class="main-class">
    <div class="content">
      <h3>Identifique-se</h3>
      <?php if ($_SESSION["erros"]) : ?>
        <div class="erros">
          <?php foreach ($_SESSION["erros"] as $erro) : ?>
            <p><?= $erro ?></p>
          <?php endforeach ?>
        </div>
      <?php endif ?>
      <form action="#" method="post">
        <div>
          <label for="email">E-mail</label>
          <input type="email" name="email" id="email">
        </div>
        <div>
          <label for="senha">Senha</label>
          <input type="password" name="senha" id="senha">
        </div>
        <button>Entrar</button>
      </form>
    </div>
  </main>
  <footer class=" footer-class">COD3R & ALUNOS &copy; <?= date('Y'); ?>
  </footer>
</body>

</html>