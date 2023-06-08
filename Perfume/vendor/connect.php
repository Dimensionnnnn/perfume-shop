<?php
    $connect = mysqli_connect('localhost', 'root', '', 'perfume');

    if (!$connect) {
        die('Error connect to DataBase');
    }