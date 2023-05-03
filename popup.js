chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {getSummary: true}, function(response) {
      if (response && response.summary) {
        document.getElementById('summary').textContent = response.summary;
      }
    });
  });
  