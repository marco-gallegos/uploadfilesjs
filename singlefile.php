<?php
$data = [];

if (!empty($_FILES)) {
    $data["status"] = "ok";
    $data["data"] = $_FILES['filejs']['tmp_name'];
    print_r($data);
}else{
    $data["status"] = "not ok";
    $data["data"] = json_encode($_POST); 
    $data["data2"] = json_encode($_GET); 
    print_r($data);
}
?>