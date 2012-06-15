show_result = (itype, body, atype) ->
  if window.success != 'success'
    $('i').removeClass().addClass(itype)
    $('.alert-body').html(body)
    $('.alert').removeClass().addClass("alert alert-#{atype} fade in").fadeIn()
    $('.preview').hide()

$ ->
  $('.alert').hide()
  $('input').focus().keydown (event) ->
    target = $('input').val()
    if event.which == 13 and target
      chrome.extension.sendRequest {vid: target}, (response) ->
        switch response.status
          when 'success'
            $('.alert').fadeOut 'fast', ->
              show_result('icon-ok', "#{target} is <a href='#{response.link}'>HERE</a>.", 'success')
              $('.preview').attr('src', response.image_link).show()
          when 'error'
            $('.alert').fadeOut 'fast', ->
              show_result('icon-remove', "#{target} doesn't exist.", 'error')
          when 'block'
            $('.alert').fadeOut 'fast', ->
              show_result('icon-ban-circle', 'is temporary unavailable. Please try again later.', 'block')
