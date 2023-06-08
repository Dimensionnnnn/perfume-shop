<?php
    session_start();
    require_once('./connect.php');
    require_once('../utils/functions.php');

    $login = $_POST['login'];

    // Подготавливаем запрос на выборку пользователя
    $query = "SELECT * FROM `user` WHERE `userLogin` = ?";
    $stmt = mysqli_prepare($connect, $query);

    // Привязываем параметры
    mysqli_stmt_bind_param($stmt, 's', $login);

    // Выполняем запрос
    mysqli_stmt_execute($stmt);

    // Получаем результаты запроса
    $result = mysqli_stmt_get_result($stmt);
    $user = mysqli_fetch_array($result);

    if ($user['login'] == $login) {
        echo("Пользователь с таким логином уже зарегистрирован!");
        exit();
    }

    $password = md5($_POST['password']);

    // Подготавливаем запрос на добавление пользователя
    $query = "INSERT INTO `user` (`userId`, `userLogin`, `userPassword`) VALUES (NULL, ?, ?)";
    $stmt = mysqli_prepare($connect, $query);

    // Привязываем параметры
    mysqli_stmt_bind_param($stmt, 'ss', $login, $password);

    // Выполняем запрос
    mysqli_stmt_execute($stmt);
    
    $_SESSION['user_id'] = get_user_id($connect, $login);

    setcookie('user_id', $_SESSION['user_id'], time() + 3600, '/');
    setcookie('user_login', $login, time() + 3600, '/');
    
    header('Location: /');