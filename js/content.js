var cell, vid;

cell = document.getElementsByClassName('nw')[10];

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
