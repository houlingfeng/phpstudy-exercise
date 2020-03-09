<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		img{
			width: 240px;
			height: 240px;
		}
	</style>
</head>
<body>
	<?php

	// include后面跟文件地址，引入php文件
	include 'fruitsphotos.php';

	print_r($arr);
	echo '<ul>';
	for ($i=0;$i<count($arr);$i++) { 
		echo '<li>';
		echo '<a href="'.$arr[$i]['href'].'">a链接</a>';
		echo '<img src="'.$arr[$i]['path'].'" alt="">';
		echo '<span>'.$arr[$i]['name'].'</span>';
		echo '</li>';

	}
	echo '</ul>';




	?>
	
</body>
</html>