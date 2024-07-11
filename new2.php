<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// ইমেইল পাঠানোর কোড
$to = 'mjhmd2024@outlook.com';
$subject = 'নতুন কনটাক্ট ফর্ম সাবমিশন';
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: ". $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$body = "আপনি একটি নতুন বার্তা পেয়েছেন:\n\n";
$body .= "নাম: $name\n";
$body .= "ইমেইল: $email\n";
$body .= "বার্তা:\n$message\n";

// ইমেইল পাঠানো
mail($to, $subject, $body, $headers);

echo "বার্তা সফলভাবে পাঠানো হয়েছে!";
}
?>

এই স্ক্রিপ্টটি আপনার HTML ফর্মের action অ্যাট্রিবিউটে যুক্ত করুন। উদাহরণস্বরূপ:

<form action="new2.php" method="POST">
<!-- ফর্ম ফিল্ডস -->
</form>
