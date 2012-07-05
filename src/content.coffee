target_cell = $('.nw:contains(品番：)').next()

chrome.extension.sendRequest {vid: target_cell.text()}, (response) ->
  if response.link
    console.log response
    target_cell.html("#{target_cell.text()}<i class='icon icon-heart' style='background-image: url(#{response.css_img.substr(0, response.css_img.length-4)}-pink.png);'>")
    $('i.icon').click ->
      $.get response.link, (data) ->
        console.log data
        location.replace(response.link)
  else
    target_cell.html("#{target_cell.text()}<i class='icon icon-heart' style='background-image: url(#{response.css_img});'>")
  

