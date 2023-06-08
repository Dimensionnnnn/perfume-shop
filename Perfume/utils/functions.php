<?php
    function get_user_id($connect, $user_login) {
        $stmt = $connect->prepare("SELECT `userId` FROM `user` WHERE `userLogin` = ?");
        $stmt->bind_param("s", $user_login);
        $stmt->execute();
        $user_id = $stmt->get_result()->fetch_assoc()['userId'];
        $stmt->close();
        return $user_id;
    }

    function get_product_by_id($connect, $product_id) {
        $stmt = $connect->prepare("SELECT * FROM `product` WHERE `productId` = ?");
        $stmt->bind_param("i", $product_id);
        $stmt->execute();
        $product = $stmt->get_result()->fetch_assoc();
        $stmt->close();
        return $product;
    }

    function getBrands($connect) {
        $stmt = $connect->prepare("SELECT * FROM `brands`");
        $stmt->execute();
        $brands = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $brands;
    }