<?php
    session_start();

    $respones = array();

    if (isset($_SESSION['user_id']) && isset($_COOKIE['user_id'])) {
        $response['status'] = 'success';
        $response['message'] = 'You are logged in';
    } else {
        $response['status'] = 'failed';
        $response['message'] = 'You are not logged in';
    }

    echo json_encode($response);