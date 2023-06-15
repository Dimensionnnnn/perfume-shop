<?php 
   require_once './connect.php';
   require_once '../utils/functions.php';

   $brands = getBrands($connect);

   echo json_encode($brands);