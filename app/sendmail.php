<?php
	$SITE_TITLE = 'Boss Soffa';
	$SITE_DESCR = '';

	if ( isset($_POST) ) {
		// $name = htmlspecialchars(trim($_POST['name']));
		$email = htmlspecialchars(trim($_POST['email']));
		$phone = htmlspecialchars(trim($_POST['phone']));
		$one = htmlspecialchars ($_POST["one"]);
		$two = htmlspecialchars ($_POST["two"]);
		$three = htmlspecialchars ($_POST["three"]);
		$four = htmlspecialchars ($_POST["four"]);
		$five = htmlspecialchars ($_POST["five"]);
		$six = htmlspecialchars ($_POST["six"]);
		$subject = $_POST['subject'] ? htmlspecialchars(trim($_POST['subject'])) : '';
		$comment = isset($_POST['comment']) ? htmlspecialchars(trim($_POST['comment'])) : '';
		$question = isset($_POST['question']) ? htmlspecialchars(trim($_POST['question'])) : '';
		$to = 'Elena357910@yandex.com';

		$headers = "From: $SITE_TITLE \r\n";
		$headers .= "Reply-To: ". $email . "\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";

		$data = '<h1>'.$subject."</h1>";
		$data .= 'Email: '.$email."<br>";
		$data .= 'Телефон: '.$phone."<br>";
		$data .= 'Название дивана: '.$one."<br>";
		$data .= 'Конфигураци: '.$two."<br>";
		$data .= 'Размер: '.$three."<br>";
		$data .= 'Глубина: '.$four."<br>";
		$data .= 'Ткань: '.$five."<br>";
		$data .= 'Куда отправить стоимость: '.$six."<br>";

		if ( $comment != '' ) {
			$data .= 'Комментарий: ' . $comment;
		}
		if ( $question != '' ) {
			$data .= 'Вопрос: ' . $question;
		}

		$message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
				".$data."
				<br>\n
				<hr>\n
				<br>\n
				<small>это сообщение было отправлено с сайта ".$SITE_TITLE." - ".$SITE_DESCR.", отвечать на него не надо</small>\n</div>";
		$send = mail($to, $subject, $message, $headers);

		if ( $send ) {
			echo '';
		} else {
				echo '<div class="error">Ошибка отправки формы</div>';
		}

	}
	else {
			echo '<div class="error">Ошибка, данные формы не переданы.</div>';
	}
	die();
?>