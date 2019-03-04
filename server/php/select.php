<?php

    include './db_connection.php';

    header("Access-Control-Allow-Origin: *");

    $show_questions = 'SELECT * FROM questions';

    $questions_result = mysqli_query($conn, $show_questions);
    $json_array = array();

    while($row = mysqli_fetch_assoc($questions_result)){

        $json_array[] = $row;

    }

    echo json_encode($json_array);

?>