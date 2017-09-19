<?php 

$dir = 'main';
  // 默认文件名称
  $filename = 'index';

  // 处理URL中的路径
  if(array_key_exists('PATH_INFO',$_SERVER)){
    // 路径存在
    // 请求路径
    $path = $_SERVER['PATH_INFO'];// /main/index
    // 截取字符串
 	$str=substr($path, 1);
    // 分割字符串
    $ret = explode('/',$str);
   
    // var_dump($ret);
    if(count($ret)==2){
    	$dir=$ret[0];
    	$filename=$ret[1];
    }else{
    	$filename='login';
    }
  }
// $path=$_SERVER['PATH_INFO'];

// include('./views'.$path.'.html')
  include('./views/'.$dir.'/'.$filename.'.html');


 ?>