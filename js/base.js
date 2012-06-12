(function() {
  var checkLang, nav_lang, renderNav;

  nav_lang = {
    zh: {
      home: '主頁',
      product: '產品介紹',
      tutorial: '線上教學',
      download: '相關下載',
      about: '關於我們',
      other: '其他語言'
    },
    en: {
      home: 'Home',
      product: 'Product',
      tutorial: 'Tutorial',
      download: 'Download',
      about: 'About',
      other: 'Languages'
    }
  };

  checkLang = function() {
    if (!(window.localStorage['lang'] != null)) {
      $('#main').prepend("      <div class='alert alert-info fade in'>        <a class='close' data-dismiss='alert' href='#'>&times;</a>        <h3>Welcome to Adegleyoyos official website</h3>        Please choose a language.        請選擇你所慣用的語言        <select class='span2'>          <option></option>          <option>中文</option>          <option>English</option>        </select>      </div>");
      $('.alert select').change(function() {
        window.localStorage['lang'] = $('.alert select').val();
        renderNav();
        return $('.alert').alert('close');
      });
    }
    $('#to_chinese').click(function() {
      window.localStorage['lang'] = '中文';
      renderNav();
      return $('.alert').alert('close');
    });
    return $('#to_english').click(function() {
      window.localStorage['lang'] = 'English';
      renderNav();
      return $('.alert').alert('close');
    });
  };

  renderNav = function() {
    var source;
    source = '';
    switch (window.localStorage['lang']) {
      case '中文':
        source = 'zh';
        break;
      case 'English':
        source = 'en';
    }
    if (source) {
      $('#link_index a').html(nav_lang[source].home);
      $('#link_product a').html(nav_lang[source].product);
      $('#link_tutorial a').html(nav_lang[source].tutorial);
      $('#link_download a').html(nav_lang[source].download);
      $('#link_about a').html(nav_lang[source].about);
      return $('#menu > a').html(nav_lang[source].other + "<b class='caret'></b>");
    }
  };

  $(function() {
    checkLang();
    return renderNav();
  });

}).call(this);
