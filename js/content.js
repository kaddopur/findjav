var c, cell, cells, vid, _i, _len;

cells = document.getElementsByClassName('nw');

for (_i = 0, _len = cells.length; _i < _len; _i++) {
  c = cells[_i];
  if (c.innerHTML === '品番：') {
    cell = c;
    break;
  }
}

vid = cell.nextSibling.nextSibling.innerHTML;

chrome.extension.sendRequest({
  vid: vid
}, function(response) {
  if (response.link) {
    return cell.nextSibling.nextSibling.innerHTML += "      <a href='" + response.link + "' target='_blank'>        <i class='icon icon-heart' style='background-image: url(" + (response.css_img.substr(0, response.css_img.length - 4)) + "-pink.png);'>      </a>";
  } else {
    return cell.nextSibling.nextSibling.innerHTML += "<i class='icon icon-heart' style='background-image: url(" + response.css_img + ");'>";
  }
});
