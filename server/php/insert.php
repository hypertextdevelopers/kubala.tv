<?php

    include './db_connection.php';
    header("Access-Control-Allow-Origin: *");

    $id1 = $_POST['id1'];
    $id2 = $_POST['id2'];
    $id3 = $_POST['id3'];
    $id4 = $_POST['id4'];
    $id5 = $_POST['id5'];
    $id6 = $_POST['id6'];
    $id7 = $_POST['id7'];
    $id8 = $_POST['id8'];
    $id9 = $_POST['id9'];
    $id10 = $_POST['id10'];

    $update_query1 = "UPDATE questions SET disabled = 0 WHERE id = '$id1'";
    $update_query2 = "UPDATE questions SET disabled = 0 WHERE id = '$id2'";
    $update_query3 = "UPDATE questions SET disabled = 0 WHERE id = '$id3'";
    $update_query4 = "UPDATE questions SET disabled = 0 WHERE id = '$id4'";
    $update_query5 = "UPDATE questions SET disabled = 0 WHERE id = '$id5'";
    $update_query6 = "UPDATE questions SET disabled = 0 WHERE id = '$id6'";
    $update_query7 = "UPDATE questions SET disabled = 0 WHERE id = '$id7'";
    $update_query8 = "UPDATE questions SET disabled = 0 WHERE id = '$id8'";
    $update_query9 = "UPDATE questions SET disabled = 0 WHERE id = '$id9'";
    $update_query10 = "UPDATE questions SET disabled = 0 WHERE id = '$id10'";

    $conn -> query($update_query1);
    $conn -> query($update_query2);
    $conn -> query($update_query3);
    $conn -> query($update_query4);
    $conn -> query($update_query5);
    $conn -> query($update_query6);
    $conn -> query($update_query7);
    $conn -> query($update_query8);
    $conn -> query($update_query9);
    $conn -> query($update_query10);

?>