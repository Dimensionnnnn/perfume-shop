<?php
    require_once './connect.php';

    // Получаем параметры фильтрации из GET-запроса
    $prices = $_GET["prices"] ?? [];
    
    $brands = isset($_GET['brands']) ? explode(',', $_GET['brands']) : [];
    $genders = isset($_GET['gender']) ? explode(',', $_GET['gender']) : [];

    // Получаем идентификаторы брендов по их названиям
    $brandIds = [];
    if (!empty($brands)) {
        $placeholders = implode(",", array_fill(0, count($brands), "?"));
        $sql = "SELECT brandId FROM brands WHERE brandName IN ($placeholders)";
        $stmt = mysqli_prepare($connect, $sql);
        mysqli_stmt_bind_param($stmt, str_repeat("s", count($brands)), ...$brands);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $brandIds = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $brandIds = array_column($brandIds, 'brandId');
    }

    // Подготавливаем SQL-запрос с учетом фильтров
    $sql = "SELECT * FROM product WHERE 1";
    $params = [];
    if (!empty($brandIds)) {
        if (count($brandIds) === 1) {
            $sql .= " AND productBrandId = ?";
            $params = array_merge($params, $brandIds);
        } else {
            $placeholders = implode(",", array_fill(0, count($brandIds), "?"));
            $sql .= " AND productBrandId IN ($placeholders)";
            $params = array_merge($params, $brandIds);
        }
    }
    if (!empty($genders)) {
        if (in_array(2, $genders) || count($genders) === 2) {
            //показываем товары всех гендеров - ничего не делаем
        }
        else if (count($genders) === 1) {
            $sql .= " AND productGender = ?";
            $params = array_merge($params, $genders);
        } else {
            $placeholders = implode(",", array_fill(0, count($genders), "?"));
            $sql .= " AND productGender IN ($placeholders)";
            $params = array_merge($params, $genders);
        }
    }
    if (!empty($prices)) {
        $min = $prices[0] ?? 0;
        $max = $prices[1] ?? PHP_INT_MAX;
        $sql .= " AND price >= ? AND price <= ?";
        $params = array_merge($params, [$min, $max]);
    }
    $sql .= " LIMIT 20";

    // Выполняем SQL-запрос и получаем результаты
    $stmt = mysqli_prepare($connect, $sql);
    if (!empty($params)) {
        $types = str_repeat("s", count($params));
        mysqli_stmt_bind_param($stmt, $types, ...$params);
    }
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $products = mysqli_fetch_all($result, MYSQLI_ASSOC);

    // Отправляем результаты в формате JSON
    header("Content-Type: application/json");
    echo json_encode($products);