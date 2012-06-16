cells = document.getElementsByClassName('nw')
for c in cells
  if c.innerHTML == '品番：'
    cell = c
    break
vid = cell.nextSibling.nextSibling.innerHTML

chrome.extension.sendRequest {vid: vid}, (response) ->
  if response.link
    cell.nextSibling.nextSibling.innerHTML += "
      <a href='#{response.link}' target='_blank'>
        <i class='icon icon-heart' style='background-image: url(#{response.css_img.substr(0, response.css_img.length-4)}-pink.png);'>
      </a>"
  else
    cell.nextSibling.nextSibling.innerHTML += "<i class='icon icon-heart' style='background-image: url(#{response.css_img});'>"


