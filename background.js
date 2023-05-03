chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.textSelected) {
      chrome.browserAction.setPopup({popup: "popup.html"});
    }
  });
  