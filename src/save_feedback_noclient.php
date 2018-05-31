<?php
$servername = "localhost";
$username = "root";
$password = "santiagorocha442";
$dbname = "feedbackBase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if($_POST['submit_feed']='Submit')
{
    $name = ($_POST['name']);
    $telephone = ($_POST['telephone']);
    $mail = ($_POST['mail']);
    $bank = ($_POST['bank']);
    $problem = ($_POST['problem']);
    $place = ($_POST['place']);
    $address_problem = ($_POST['address_problem']);
    $subject = ($_POST['subject']);

$sql = "INSERT INTO noclient (name, telephone, mail, bank, problem, place, address_problem, subject) 
VALUES 
('$name','$telephone','$mail','$bank','$problem','$place','$address_problem','$subject')";

if ($conn->query($sql) === TRUE) 
{
    echo "New record created successfully";
} 
else 
{
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
}echo ("la madre que lo pareo")
?>
