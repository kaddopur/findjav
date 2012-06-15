var show_result;

show_result = function(itype, body, atype) {
  if (window.success !== 'success') {
    $('i').removeClass().addClass(itype);
    $('.alert-body').html(body);
    $('.alert').removeClass().addClass("alert alert-" + atype + " fade in").fadeIn();
    return $('.preview').hide();
  }
};

$(function() {
  $('.alert').hide();
  return $('input').focus().keydown(function(event) {
    var target;
    target = $('input').val();
    if (event.which === 13 && target) {
      return chrome.extension.sendRequest({
        vid: target
      }, function(response) {
        switch (response.status) {
          case 'success':
            return $('.alert').fadeOut('fast', function() {
              show_result('icon-ok', "" + target + " is <a href='" + response.link + "'>HERE</a>.", 'success');
              return $('.preview').attr('src', response.image_link).show();
            });
          case 'error':
            return $('.alert').fadeOut('fast', function() {
              return show_result('icon-remove', "" + target + " doesn't exist.", 'error');
            });
          case 'block':
            return $('.alert').fadeOut('fast', function() {
              return show_result('icon-ban-circle', 'is temporary unavailable. Please try again later.', 'block');
            });
        }
      });
    }
  });
});
