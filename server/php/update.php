<?php

    include './db_connection.php';
    header("Access-Control-Allow-Origin: *");
    
    $update_query1 = 'UPDATE questions SET disabled = 1 WHERE id > 0 AND id <  11';

    $conn -> query($update_query1);

?>