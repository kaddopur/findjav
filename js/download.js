(function() {
  var loadWallpapers;

  loadWallpapers = function() {
    var i, size, _results;
    _results = [];
    for (i = 1; i <= 5; i++) {
      _results.push((function() {
        var _i, _len, _ref, _results2;
        _ref = ['a', 'b'];
        _results2 = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          size = _ref[_i];
          _results2.push($('#psg').append("<a href='/img/wallpaper/" + (i + size) + ".jpg' target='_blank'><img class='wallpaper' src='/img/wallpaper/thumb/" + (i + size) + ".jpg'></a>"));
        }
        return _results2;
      })());
    }
    return _results;
  };

  $(function() {
    return loadWallpapers();
  });

}).call(this);
