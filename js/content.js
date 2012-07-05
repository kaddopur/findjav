var target_cell;

target_cell = $('.nw:contains(品番：)').next();

chrome.extension.sendRequest({
  vid: target_cell.text()
}, function(response) {
  if (response.link) {
    console.log(response);
    target_cell.html("" + (target_cell.text()) + "<i class='icon icon-heart' style='background-image: url(" + (response.css_img.substr(0, response.css_img.length - 4)) + "-pink.png);'>");
    return $('i.icon').click(function() {
      return $.get(response.link, function(data) {
        console.log(data);
        return location.replace(response.link);
      });
    });
  } else {
    return target_cell.html("" + (target_cell.text()) + "<i class='icon icon-heart' style='background-image: url(" + response.css_img + ");'>");
  }
});
