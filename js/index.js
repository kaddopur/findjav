var search_vid, show_result, unwrap;

unwrap = function(input) {
  var output, r;
  r = /([a-zA-Z]+)0*(\d+)/;
  output = r.exec(input);
  if (output) {
    while (output[2].length < 3) {
      output[2] = '0' + output[2];
    }
    return output[1] + output[2];
  } else {
    return '';
  }
};

show_result = function(itype, body, atype) {
  if (window.success !== 'success') {
    $('i').removeClass().addClass(itype);
    $('.alert-body').html(body);
    $('.alert').removeClass().addClass("alert alert-" + atype + " fade in").fadeIn();
    return $('.preview').hide();
  }
};

search_vid = function(target) {
  return $.get('http://javjunkies.com/main/?s=' + target, function(data) {
    var image_link, q, r, re;
    console.log(target);
    re = /Not Found/;
    if (!re.exec(data)) {
      re = /\&#038;(file=.*torrent)/;
      q = re.exec(data)[1];
      re = new RegExp("Video Id: " + target + "<");
      r = re.exec(data);
      if (q && r) {
        re = new RegExp("" + target + "\.torrent.*(http.*jpg)");
        image_link = re.exec(data)[1];
        $('.alert').fadeOut('fast', function() {
          show_result('icon-ok', "" + target + " is <a href='http://javjunkies.com/main/JavJ.php?k=1202&" + q + "'>HERE</a>.", 'success');
          return $('.preview').attr('src', image_link).show();
        });
      }
    } else {
      return $('.alert').fadeOut('fast', function() {
        return show_result('icon-remove', "" + target + " doesn't exist.", 'error');
      });
    }
  }).error(function() {
    return $('.alert').fadeOut('fast', function() {
      return show_result('icon-ban-circle', 'is temporary unavailable. Please try again later.', 'block');
    });
  });
};

$(function() {
  $('.alert').hide();
  return $('input').focus().keydown(function(event) {
    var vinfo;
    if (event.which === 13 && $('input').val()) {
      vinfo = unwrap($('input').val().toUpperCase());
      if (!vinfo) {
        $('.alert').fadeOut('fast', function() {
          show_result('icon-remove', "" + ($('input').val()) + " doesn't exist.", 'error');
        });
      }
      return search_vid(vinfo);
    }
  });
});
