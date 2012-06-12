(function() {

  chrome.browserAction.onClicked.addListener(function(tab) {
    return chrome.tabs.create({
      url: 'index.html'
    });
  });

}).call(this);
