<?php
// Handle form submission
    $Name = $_POST['Name'];
    $Email = $_POST['Email'];
    $Number = $_POST['Number'];
    $Message = $_POST['Message'];

    //Database Connection
    $conn = new mysqli("localhost", "root", "", "test");
 
    if ($conn->connect_error) {
        die("Connection Failed : " .$conn->connect_error);
    }else{
        $stmt = $conn->prepare("INSERT INTO details(Name, Email, Number, Message) values(?, ?, ?, ?)");
        $stmt->bind_param("ssis",$Name,$Email,$Number,$Message);
        $stmt->execute();
        echo "Your response submitted successfully";
        $stmt->close();
        $conn->close();
    }
?>