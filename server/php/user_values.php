<?php

    include './db_connection.php';
    header('Access-Control-Allow-Origin: *');

        $q1_a = $_POST['q1_answer'];
        $q2_a = $_POST['q2_answer'];
        $q3_a = $_POST['q3_answer'];
        $q4_a = $_POST['q4_answer'];
        $q5_a = $_POST['q5_answer'];
        $q6_a = $_POST['q6_answer'];
        $q7_a = $_POST['q7_answer'];
        $q8_a = $_POST['q8_answer'];
        $q9_a = $_POST['q9_answer'];
        $q10_a = $_POST['q10_answer'];

        $insert = "INSERT INTO summary VALUES('', '$q1_a', '$q2_a', '$q3_a','$q4_a','$q5_a','$q6_a','$q7_a','$q8_a','$q9_a','$q10_a')";

        $res = $conn -> query($insert);

?>