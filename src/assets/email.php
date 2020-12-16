<?php
 
header('Content-type: application/json');
 
$errors = '';
 
if(empty($errors))
{
 
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 
	$from_nome = $request->nome;
	$from_email = $request->email;
	$from_telefone = $request->telefone;
	$from_ingressos = $request->ingressos;
	$from_informacao = $request->informacao;
 
	$to_email = 'alefeio@gmail.com';
 
	$contact = "<p><strong>Nome:</strong> $from_nome</p>
				<p><strong>Email:</strong> $from_email</p>
				<p><strong>Telefone:</strong> $from_telefone</p>
				";
	$content = "<p>Mensagem: $from_informacao</p>";
 
	$website = 'App Reparos';
	$email_subject = "$website (www.appreparos.com)";
 
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';
 
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $from_email";
 
	mail($to_email,$email_subject,$email_body,$headers);
 
	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>