<?php
header("Content-type:text/json");
$stulist = array(
array("Code"=>"1","Name"=>"1","Score"=>"123")
);
echo json_encode($stulist);
?>