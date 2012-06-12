$ ->
  $('.alert').hide()
  $('input').focus().keydown (event)->
    if event.which == 13 and $('input').val()
      target = $('input').val().toUpperCase()
      $.get('http://javjunkies.com/main/?s='+target, (data)->
        re = /Not Found/
        if not re.exec(data)
          re = /\&#038;(file=.*torrent)/
          q = re.exec(data)[1]
          re = new RegExp("Video Id: #{target}<")
          r = re.exec(data)
          if q and r
            #re = new RegExp("src=\"(.*#{target.toLowerCase()}.*jpg)\"")
            re = new RegExp("#{target}\.torrent.*(http.*jpg)")
            image_link = re.exec(data)[1]
            $('.alert').fadeOut 'fast', ->
              $('i').removeClass().addClass('icon-ok')
              $('.alert-body').html("#{target} is <a href='http://javjunkies.com/main/JavJ.php?k=1202&#{q}'>HERE</a>.")
              $('.alert').removeClass().addClass('alert alert-success fade in').fadeIn()
              $('.preview').attr('src', image_link).show()
            return
        $('.alert').fadeOut 'fast', ->
          $('i').removeClass().addClass('icon-remove')
          $('.alert-body').html("#{target} doesn't exist.")
          $('.alert').removeClass().addClass('alert alert-error fade in').fadeIn()
          $('.preview').hide()
      ).error( ->
        $('.alert').fadeOut 'fast', ->
          $('i').removeClass().addClass('icon-ban-circle')
          $('.alert-body').html("is temporary unavailable. Please try again later.")
          $('.alert').removeClass().addClass('alert alert-block fade in').fadeIn()
          $('.preview').hide()
      )

