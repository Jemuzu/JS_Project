var typeString = ['Munder Difflin  -  Fictional Paper'];
      var i = 0;
      var count = 0
      var selectedText = '';
      var text = '';
      (function type() {
        if (count == typeString.length) {
          count = 30;
        }
        selectedText = typeString[count];
        text = selectedText.slice(0, ++i);
        document.getElementById('title').innerHTML = text;
        if (text.length === selectedText.length) {
          count++;
          i = 0;
        }
        setTimeout(type, 125);
      }());
