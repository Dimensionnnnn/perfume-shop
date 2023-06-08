<?php
    require_once './connect.php';
    require_once '../utils/functions.php';

    $product_id = $_GET['id'];
    $product = get_product_by_id($connect, $product_id);

    echo json_encode($product);