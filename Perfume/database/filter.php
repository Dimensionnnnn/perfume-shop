<?php

// Объявляем нужные константы
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'perfume');
 
// Подключаемся к базе данных
function connectDB() {
    $errorMessage = 'Невозможно подключиться к серверу базы данных';
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    if (!$conn)
        throw new Exception($errorMessage);
    else {
        $query = $conn->query('set names utf8');
        if (!$query)
            throw new Exception($errorMessage);
        else
            return $conn;
    }
}
 // Получение данных из массива _GET
function getOptions() {
    // Категория и цены
    $gender = (isset($_GET['gender'])) ? (int)$_GET['gender'] : 0;
    $minPrice = (isset($_GET['min_price'])) ? (int)$_GET['min_price'] : 0;
    $maxPrice = (isset($_GET['max_price'])) ? (int)$_GET['max_price'] : 1000000;
 
    // Бренды
    $brands = (isset($_GET['brand'])) ? implode($_GET['brand'], ',') : null;
 
    // Сортировка
    $sort = (isset($_GET['sort'])) ? $_GET['sort'] : 'price_asc';
    $sort = explode('_', $sort);
    $sortBy = $sort[0];
    $sortDir = $sort[1];
 
    return array(
        'brand' => $brands,
        'gender' => $gender,
        'min_price' => $minPrice,
        'max_price' => $maxPrice,
        'sort_by' => $sortBy,
        'sort_dir' => $sortDir
    );
}
 // Получение товаров
// Получение товаров
function getGoods($options, $conn) {
    // Обязательные параметры
    $minPrice = $options['min_price'];
    $maxPrice = $options['max_price'];
    $sortBy = $options['sort_by'];
    $sortDir = $options['sort_dir'];
 
    // Необязательные параметры
    $categoryId = $options['gender'];
    $categoryWhere =
        ($categoryId !== 0)
            ? " catalog.category_id = $categoryId and "
            : '';
 
    $brands = $options['brands'];
    $brandsWhere =
        ($brands !== null)
            ? " g.brand_id in ($brands) and "
            : '';
 
    $query = "
        select
            catalog.id as good_id,
            catalog.brand as brand,
            catalog.price as price,
            catalog.rating as rating,
            catalog.photo as photo
        from
            goods as g,
            brands as b
        where
            $categoryWhere
            $brandsWhere
            g.brand_id = b.id and
            (g.price between $minPrice and $maxPrice)
        order by $sortBy $sortDir
    ";
 
    $data = $conn->query($query);
    return $data->fetch_all(MYSQLI_ASSOC);
}
try {
  // Подключаемся к базе данных
$conn = connectDB();
 
// Получаем данные от клиента
$options = getOptions();
 
// Возвращаем клиенту успешный ответ
echo json_encode(array(
    'code' => 'success',
    'options' => $options,
    'goods' => $goods
));
}
catch (Exception $e) {
    // Возвращаем клиенту ответ с ошибкой
    echo json_encode(array(
        'code' => 'error',
        'message' => $e->getMessage()
    ));
}