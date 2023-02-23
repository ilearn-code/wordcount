
  var form = document.getElementById('doc-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'wordcount.php');
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        document.getElementById('word-count').innerHTML = data.count;
      } else {
        console.log('Error: ' + xhr.status);
      }
    };
    var formData = new FormData(form);
    xhr.send(formData);
  });

