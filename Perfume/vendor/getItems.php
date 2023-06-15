<?php
    require_once('./connect.php');
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $limit = $_GET['limit'] ?? null;
      
        $query = "SELECT * FROM product";
        if ($limit !== null) {
          $query .= " LIMIT ?";
        }
        $stmt = mysqli_prepare($connect, $query);
        if ($limit !== null) {
          mysqli_stmt_bind_param($stmt, 'i', $limit);
        }
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
      
        header('Content-Type: application/json');
        echo json_encode($data);
      }