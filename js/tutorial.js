(function() {
  var loadTutorials, tuto_beginner, tuto_preface;

  tuto_preface = [
    {
      title: '溜溜球繩的安裝',
      eng: 'installation',
      youtube: 'DgzLOZ7mVUM'
    }, {
      title: '溜溜球繩的纏繞與持球動作',
      eng: 'wind up & holding',
      youtube: 'Xvt8LqNn3SI'
    }, {
      title: '溜溜球軸承的移除',
      eng: 'removing bearing',
      youtube: 'Mii4c6NTuM0'
    }, {
      title: '溜溜球的拆解',
      eng: 'disassemble',
      youtube: 'aSCQRJ6D844'
    }, {
      title: '溜溜球的安裝',
      eng: 'Assemble',
      youtube: 'pcyvnDMC4ys'
    }, {
      title: '溜溜球安裝錯誤排除',
      eng: 'Assemble Troubleshooting',
      youtube: 'uNd3zItk1xA'
    }, {
      title: '如何移除膠貼',
      eng: 'Silicone Pads Remove',
      youtube: 'cAclHIHkS6E'
    }, {
      title: '如何安裝膠貼',
      eng: 'Silicone Pads Install',
      youtube: 'z1pDa8z5q9k'
    }, {
      title: '軸承如何上油',
      eng: 'Lubricate Bearing',
      youtube: '_ndxyz5JUK0'
    }
  ];

  tuto_beginner = [
    {
      title: '直向綁線收球',
      eng: 'Front Throw Sleeper and Bind Return',
      youtube: '7W0jwbJaqCM'
    }, {
      title: '橫向綁線收球',
      eng: 'Side Throw Sleeper and Bind Return',
      youtube: 'hpEiRA06itA'
    }, {
      title: '時鐘搖擺',
      eng: 'Rock the Baby',
      youtube: 'DBvaOb4KLRM'
    }, {
      title: '東京鐵塔',
      eng: 'Tokyo Tower',
      youtube: 'NpoHFK1vx74'
    }, {
      title: '電梯',
      eng: 'Elevator',
      youtube: 'lEXQtszzmcE'
    }, {
      title: '摩托車',
      eng: 'Motocycle',
      youtube: 'BGtbUzsK9j0'
    }, {
      title: '比基尼',
      eng: 'Bikini',
      youtube: 'MmljuT01f10'
    }, {
      title: '摩天輪',
      eng: 'Pinwheel',
      youtube: 'yy4aYj_AVEg'
    }, {
      title: '單手星',
      eng: 'Star',
      youtube: 'FO4uSPB6cxc'
    }, {
      title: '雙手星',
      eng: 'Two Handed Star',
      youtube: 'bhLOKLFJhlQ'
    }, {
      title: '火箭',
      eng: 'Rocket',
      youtube: 'P913DXMxr2E'
    }, {
      title: '上線',
      eng: 'Trapeze',
      youtube: 'tEO1r1qKBuM'
    }
  ];

  loadTutorials = function(target, data) {
    var i, t, _len;
    for (i = 0, _len = data.length; i < _len; i++) {
      t = data[i];
      $("#" + target + " .nav").append("      <li>        <a href='#" + target + "_" + i + "', data-toggle='tab'>" + t.title + "</a>      </li>");
      $("#" + target + " .tab-content").append("      <div id='" + target + "_" + i + "' class='tab-pane'>        <div class='episode'>          <iframe width='560' height='315' src='http://www.youtube.com/embed/" + t.youtube + "?wmode=transparent' frameborder='0' allowfullscreen></iframe>        </div>        <hgroup>          <h2>" + t.title + "</h2>          <h6>" + t.eng + "</h6>        </hgroup>      </div>");
    }
    $("#" + target + " .nav li:first-child").addClass('active');
    return $("#" + target + " .tab-content .tab-pane:first-child").addClass('active');
  };

  $(function() {
    loadTutorials('preface', tuto_preface);
    return loadTutorials('beginner', tuto_beginner);
  });

}).call(this);
