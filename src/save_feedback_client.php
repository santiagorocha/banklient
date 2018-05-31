<?php
   /*$servername = "localhost";
   $username = "root";
   $password = "santiagorocha442";
   
   // Create connection
   $conn = new mysqli($servername, $username, $password);
   
   // Check connection
   if ($conn->connect_error) {
       die("Connection failed: " . $conn->connect_error);
   }
   echo "Connected successfully";*/

   /*if (isset($_POST['problem']) && isset($_POST['name']) && isset($_POST['address']) && isset($_POST['passport']) && isset($_POST['telephone']) && isset($_POST['mail']) && isset($_POST['place']) && isset($_POST['address_problem']) && isset($_POST['subject'])) {
    $problem = $_POST['problem'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $passport = $_POST['passport'];
    $telephone = $_POST['telephone'];
    $mail = $_POST['mail'];
    $place = $_POST['place'];
    $address_problem = $_POST['address_problem'];
    $subject = $_POST['subject'];
   }echo ("mal");

   if ($problem == '') { unset($problem);}*/
   
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

if(isset($_POST['submit_feed']))
{
    $problem = ($_POST['problem']);
    $name = ($_POST['name']);
    $address = ($_POST['address']);
    $passport = ($_POST['passport']);
    $telephone = ($_POST['telephone']);
    $mail = ($_POST['mail']);
    $place = ($_POST['place']);
    $address_problem = ($_POST['address_problem']);
    $subject = ($_POST['subject']);

$sql = "INSERT INTO client (problem, name, address, passport, telephone, mail, place, address_problem, subject) 
VALUES 
('$problem','$name','$address','$passport','$telephone','$mail','$place','$address_problem','$subject')";

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

    /*$con = mysqli_connect('localhost','root','santiagorocha442','feedbackBase');
    if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
    }
    $sql="INSERT INTO client (problem, name, address, passport, telephone, mail, place, address_problem, subject) 
    VALUES 
    ('$problem','$name','$address','$passport','$telephone','$mail','$place','$address_problem','$subject')";
    
    $result = mysqli_query($con,$sql);
    if (!mysql_query($sql,$con))
    {
    die('Error: ' . mysql_error());
    }
    echo "1 record added";

    mysql_close($con)*/


    /*$con = mysql_connect("localhost","root","santiagorocha442");

if (!$con)

  {

  die('Could not connect: ' . mysql_error());

  }

 

mysql_select_db("root", $con);

 

$sql="INSERT INTO client (problem, name, address, passport, telephone, mail, place, address_problem, subject)

VALUES

(('$_POST[problem]','$_POST[name]','$_POST[address]','$_POST[passport]','$_POST[telephone]','$_POST[mail]','$_POST[place]','$_POST[address_problem]','$_POST[subject]')";

 

if (!mysql_query($sql,$con))

  {

  die('Error: ' . mysql_error());

  }

echo "1 record added";

 

mysql_close($con)*/
   /*$result = mysql_query ("INSERT INTO client (problem,name,address,passport,telephone,mail,place,address_problem,subject) VALUES ('$problem','$problem','$address','$passport','$telephone','$mail','$place','$address_problem','$subject')");
   if (!$result) {
    $message  = 'Invalid query: ' . mysql_error() . "\n";
    $message .= 'Whole query: ' . $query;
    die($message);
    }else{
        $message .= 'Whole query: ' . $query;
    }*/
?>