var unwrap;

unwrap = function(input) {
  var output, r;
  r = /([a-zA-Z]+)[0-]*(\d+)/;
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
  var link, status, target;
  target = unwrap(request.vid);
  link = '';
  status = 'error';
  return $.get('http://javjunkies.com/main/?s=' + target, function(data) {
    var correct, image_link, query, re, result;
    re = /Not Found/;
    if (!re.exec(data)) {
      re = /(file=.*torrent)/g;
      result = data.match(re);
      query = result[result.length - 1];
      re = new RegExp("Video Id: " + target + "<");
      correct = re.exec(data);
      re = new RegExp("" + target + "\.torrent.*(http.*jpg)");
      image_link = re.exec(data)[1];
      if (query && correct) {
        status = 'success';
        link = "http://javjunkies.com/main/JavJ.php?" + query;
      }
    }
    return sendResponse({
      status: status,
      link: link,
      css_img: chrome.extension.getURL('img/glyphicons-halflings.png'),
      image_link: image_link
    });
  }).error(function() {
    status = 'block';
    return sendResponse({
      status: status
    });
  });
});
