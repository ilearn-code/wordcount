
<?php
$contents = $_POST['contents'];
$wordCount = str_word_count($contents);
echo $wordCount;
?>
