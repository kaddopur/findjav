unwrap = (input) ->
  r = /([a-zA-Z]+)[0-]*(\d+)/
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
  status = 'error'
  $.get('http://javjunkies.com/main/?s='+target, (data) ->
    re = /Not Found/
    if not re.exec(data)
      re = /(file=.*torrent)/g
      result = data.match(re)
      query = result[result.length-1]
      re = new RegExp("Video Id: #{target}<")
      correct = re.exec(data)
      re = new RegExp("#{target}\.torrent.*(http.*jpg)")
      image_link = re.exec(data)[1]
      if query and correct
        status = 'success'
        link = "http://javjunkies.com/main/JavJ.php?k=2215&#{query}"
    sendResponse {status: status, link: link, css_img: chrome.extension.getURL('img/glyphicons-halflings.png'), image_link: image_link}
  ).error( ->
    status = 'block'
    sendResponse {status: status}
  )
