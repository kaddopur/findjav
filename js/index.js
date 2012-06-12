(function() {

  $(function() {
    $('.alert').hide();
    return $('input').focus().keydown(function(event) {
      var target;
      if (event.which === 13 && $('input').val()) {
        target = $('input').val().toUpperCase();
        return $.get('http://javjunkies.com/main/?s=' + target, function(data) {
          var image_link, q, r, re;
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
                $('i').removeClass().addClass('icon-ok');
                $('.alert-body').html("" + target + " is <a href='http://javjunkies.com/main/JavJ.php?k=1202&" + q + "'>HERE</a>.");
                $('.alert').removeClass().addClass('alert alert-success fade in').fadeIn();
                return $('.preview').attr('src', image_link).show();
              });
              return;
            }
          }
          return $('.alert').fadeOut('fast', function() {
            $('i').removeClass().addClass('icon-remove');
            $('.alert-body').html("" + target + " doesn't exist.");
            $('.alert').removeClass().addClass('alert alert-error fade in').fadeIn();
            return $('.preview').hide();
          });
        }).error(function() {
          return $('.alert').fadeOut('fast', function() {
            $('i').removeClass().addClass('icon-ban-circle');
            $('.alert-body').html("is temporary unavailable. Please try again later.");
            $('.alert').removeClass().addClass('alert alert-block fade in').fadeIn();
            return $('.preview').hide();
          });
        });
      }
    });
  });

}).call(this);
