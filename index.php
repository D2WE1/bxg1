<?php 

$dir = 'main';
  // Ĭ���ļ�����
  $filename = 'index';

  // ����URL�е�·��
  if(array_key_exists('PATH_INFO',$_SERVER)){
    // ·������
    // ����·��
    $path = $_SERVER['PATH_INFO'];// /main/index
    // ��ȡ�ַ���
 	$str=substr($path, 1);
    // �ָ��ַ���
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