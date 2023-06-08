<?php
    session_start();
    require_once('./connect.php');
    require_once('../utils/functions.php');

    $login = $_POST['login'];
    $password = md5($_POST['password']);

    $stmt = mysqli_prepare($connect, "SELECT * FROM `user` WHERE `userLogin` = ? AND `userPassword` = ?");
    mysqli_stmt_bind_param($stmt, "ss", $login, $password);
    mysqli_stmt_execute($stmt);
    $check_user = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($check_user) == 0) {
        echo('Такой пользователь не найден или введен неверный пароль!');
        exit();
    }

    $check_user = mysqli_fetch_array($check_user);

    $_SESSION['user_id'] = get_user_id($connect, $login);

    setcookie('user_id', $_SESSION['user_id'], time() + 3600, '/');
    setcookie('user_login', $login, time() + 3600, '/');

    header('Location: /');
