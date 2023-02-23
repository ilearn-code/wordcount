
  document.getElementById('wordCountForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var file = document.getElementById('docFile').files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var wordCount = xhr.responseText;
          alert('Word count: ' + wordCount);
        }
      };
      xhr.open('POST', 'wordcount.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('contents=' + encodeURIComponent(contents));
    };
    reader.readAsText(file);
  });
