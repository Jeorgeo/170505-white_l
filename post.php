<?
// ----------------------------конфигурация-------------------------- //

header("Content-Type: text/html; charset=utf-8");

$adminemail="";  // e-mail админа


$date=date("d.m.y"); // число.месяц.год

$time=date("H:i"); // часы:минуты:секунды

$backurl="https://лилиябелая.рф";  // На какую страничку переходит после отправки письма

//---------------------------------------------------------------------- //



// Принимаем данные с формы

$indicator=$_POST['indicator'];

$name=$_POST['name'];

$phone=$_POST['phone'];

$msg=$_POST['message'];






$msg="

Откуда заказ: $indicator

Имя: $name

E-mail: $email

сообщение: $msg


";



 // Отправляем письмо админу

mail("$adminemail", "$date $time Сообщение от $name", "$msg");



// Сохраняем в базу данных

$f = fopen("message.txt", "a+");

fwrite($f," \n $date $time Сообщение от $name");

fwrite($f,"\n $msg ");

fwrite($f,"\n ---------------");

fclose($f);



// Выводим сообщение пользователю

print "<script language='Javascript'><!--
function reload() {location = \"$backurl\"}; setTimeout('reload()', 500);
//--></script>

$msg

<p>Ваш заказ принят! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";
exit;



?>
