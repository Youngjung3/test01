<?php 
//대소문자구별
//경로나 파일명 한글절대안됨
//문장의 끝에 ; 안쓰면 큰일남

 echo '<h1>인혜안녕~</h1>'

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <h1>index1.php</h1>
   <!-- 여기는 html -->
   <?php
    //한줄주석
    /* 여러줄주석
       파일.php
       php는 html과 함께 사용할수 있다
    */
    //php 변수선언 $식별자='값';
    $name='인혜';
    #한줄주석
    //php 출력
    //'문자'.$변수. ,
    //안녕이랑 네임 연결하려면 점이나 쉼표를 찍는당~
    echo '안녕,' ,$name,'!!!!';  
    echo '<h2>'.$name.'입니당</h2>';
    echo "<h2>🐬.$name.입니당</h2>";
   ?>
   <table> 
    <tr>
        <td>테이블</td>
        <td>테이블</td>
        <td>테이블</td>
    </tr>
   </table> 
   <ul>
    <li>리스트</li>
    <li>리스트</li>
   </ul>
   <?php
    echo '<hr/> php두번째'.$name;
    $name="형섭";
    #echo $name.'종건';
    echo $name.'종건';
    #echo '사라'.$name.'종건';
    
   ?>
   <!-- standard tag -->
   <?php
     echo "<hr> 🐢$name"
   ?>
   <!-- short open tag -->
   <?php
    $name="내현";
    echo "<hr>🦩$name";
   ?>
   <!-- echo shortcut -->
   <p>
     <?= $name ?>
   </p>
</body>
</html>