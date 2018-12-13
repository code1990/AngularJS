<?php
if($_GET["action"])=='search'){
	heaer("Content-type:text/json");
	$stulist = array(
	array("Code"=>"1001","Name"=>"xx","Sex"=>"female")
	);
	echo json_encode[$stulist]
}elseif($_GET["action"]=="save"){
	if($_POST["key"]=="1080"){
		echo "1";
	}else {
		echo "2";
	}
}
?>