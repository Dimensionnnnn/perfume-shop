<?php
    session_unset();
    session_destroy();
    setcookie('user_id', $_COOKIE['user_id'], time() - 3600, '/');
    setcookie('user_login', $_COOKIE['user_login'], time() - 3600, '/');
    header('Location: /');