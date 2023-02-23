
<?php
if ($_FILES['doc-file']['error'] === UPLOAD_ERR_OK) {
  $doc_contents = file_get_contents($_FILES['doc-file']['tmp_name']);
  $word_count = str_word_count($doc_contents);
  $data = array('count' => $word_count);
  echo json_encode($data);
} else {
  echo 'Error uploading file.';
}
?>
