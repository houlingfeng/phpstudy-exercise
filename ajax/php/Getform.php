<?php
  header('content-type:text/html;charset=utf-8');
  print_r($_POST);
  print_r($_FILES);
  //移动文件到别的目录
  move_uploaded_file($_FILES['photo']['tmp_name'],'images/'.$_FILES['photo']['name']);
  //睡眠器
  sleep(5);


?>