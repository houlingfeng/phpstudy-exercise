<style type="text/css">
  span{
    color:red;
    font-size:14px;
  }

  



</style>
  


<?php
  //设置页面编码格式,不能漏分号
  header('content-type:text/html;charset=utf-8');
  //定义变量$
  $name = '吴京';
  echo $name;
  //换行
  echo "<br>";

  //数字
  $num = 123;
  $pi = 3.1415926;
  echo $pi;
  echo "<br>";
  echo $num;
  echo "<br>";
  echo "hello";
  echo "<br>";
  echo "你好 世界";
  echo "<br>";

  //布尔与if,false输出1，true不输出
  $male = false;
  if (!true) {
  	echo false;
  	
  }else{
  	echo true;
  }
  echo "<br>";
  echo false;
  echo true;
  echo "<br>";

  //字符串通过.的方式拼接
  $li=1;
  echo "字符串拼接".$li;
  echo "<br>";

  //数组 用array()创建数组
  $foodArr = array('j','a','cv');
  //$len = $foodArr[lenght];
  echo $foodArr[2];
  //数组直接输出复杂类型方法
  print_r($foodArr);
  echo "<br>";
  //count(数组，可选参数)用来计算数组的长度
  for ($i=0; $i < count($foodArr) ; $i++) { 
    echo $foodArr[$i];
  }
  echo "<br>";

  //键值对数组
  $person = array('name'=>'吴京','film'=>'战狼','wife'=>'谢楠');
  //通过数组[键]取值
  echo $person['wife'];
  print_r($person);
  echo "<br>";
  //遍历数组
  foreach ($person as $key => $value) {
    echo $key.':'.$value;
    echo "<br>";
  }
  echo "<br>";

  //二维数组
  $liu = array('name'=>'刘德华','film'=>'无间道','friend'=>'周润发');
  $wu = array('name'=>'吴京','film'=>'战狼','friend'=>'胡歌');
  $zhang = array('name'=>'张一山','film'=>'家有儿女','friend'=>'杨紫');
  $zhou = array('name'=>'周星驰','film'=>'喜剧之王','friend'=>'梁朝伟');
  $star = array($liu,$wu,$zhang,$zhou);
  for ($i=0; $i < count($star) ; $i++) { 
    foreach ($star[$i] as $key => $value) {
    echo '<h2><span>'.$key.':'.$value.'</span></h2>';
    
  }
   echo "<br>";
    
  }
  
 



?>
