document.addEventListener('mouseup', function() {
    var selectedText = window.getSelection().toString().trim();
    console.log(selectedText)
    if (selectedText !== '') {
      // Code to run when text is highlighted
      console.log('Highlighted text:', selectedText);
    }
  });