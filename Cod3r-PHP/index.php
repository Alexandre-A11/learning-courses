<?php
session_start();

if ($_COOKIE["user"]) {
  $_SESSION["user"] = $_COOKIE["user"];
}

if (!$_SESSION["user"]) { // "user" foi a variável que escolhi 😁 
  header("Location: login.php");  // Location é obrigatório nesse caso 
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
  <title>Curso PHP</title>
</head>

<body>
  <header class="header-class">
    <h1>Curso PHP</h1>
    <h2>Índice dos Exercícios</h2>
  </header>
  <nav class="navigation-class">
    <span class="user">Usuário: <?= $_SESSION["user"] ?></span>
    <a href="logout.php" class="red">Sair</a>
  </nav>
  <main class="main-class">
    <div class="content">
      <?php
      require_once("menu.php");
      ?>
    </div>
  </main>
  <footer class="footer-class">COD3R & ALUNOS &copy; <?= date('Y'); ?>
  </footer>
</body>

</html>