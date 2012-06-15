var unwrap;

unwrap = function(input) {
  var output, r;
  r = /([a-zA-Z]+)0*(\d+)/;
  output = r.exec(input.toUpperCase());
  if (output) {
    while (output[2].length < 3) {
      output[2] = '0' + output[2];
    }
    return output[1] + output[2];
  } else {
    return '';
  }
};

chrome.browserAction.onClicked.addListener(function(tab) {
  return chrome.tabs.create({
    url: 'index.html'
  });
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  var link, target;
  target = unwrap(request.vid);
  link = '';
  return $.get('http://javjunkies.com/main/?s=' + target, function(data) {
    var base, correct, query, re;
    re = /Not Found/;
    if (!re.exec(data)) {
      re = /\&#038;(file=.*torrent)/;
      query = re.exec(data)[1];
      re = new RegExp("Video Id: " + target + "<");
      correct = re.exec(data);
      re = /window\.open\("(http[^\s"]*)/;
      base = re.exec(data)[1];
      console.log(base);
      if (query && correct) link = "" + base + "&" + query;
    }
    return sendResponse({
      link: link,
      css_img: chrome.extension.getURL('img/glyphicons-halflings.png')
    });
  });
});
