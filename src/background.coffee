unwrap = (input) ->
  r = /([a-zA-Z]+)0*(\d+)/
  output = r.exec(input.toUpperCase())
  if output
    while output[2].length < 3
      output[2] = '0' + output[2]
    output[1] + output[2]
  else
    ''

chrome.browserAction.onClicked.addListener (tab) ->
  chrome.tabs.create {url: 'index.html'}

chrome.extension.onRequest.addListener (request, sender, sendResponse) ->
  target = unwrap(request.vid)
  link = ''
  $.get('http://javjunkies.com/main/?s='+target, (data) ->
    re = /Not Found/
    if not re.exec(data)
      re = /\&#038;(file=.*torrent)/
      query = re.exec(data)[1]
      re = new RegExp("Video Id: #{target}<")
      correct = re.exec(data)
      if query and correct
        link = "http://javjunkies.com/main/JavJ.php?#{query}"
    sendResponse {link: link, css_img: chrome.extension.getURL('img/glyphicons-halflings.png')}
  )
