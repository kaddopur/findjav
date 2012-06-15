unwrap = (input) ->
  r = /([a-zA-Z]+)0*(\d+)/
  output = r.exec(input)
  if output
    while output[2].length < 3
      output[2] = '0' + output[2]
    output[1] + output[2]
  else
    ''

show_result = (itype, body, atype) ->
  if window.success != 'success'
    $('i').removeClass().addClass(itype)
    $('.alert-body').html(body)
    $('.alert').removeClass().addClass("alert alert-#{atype} fade in").fadeIn()
    $('.preview').hide()

search_vid = (target) ->
  $.get('http://javjunkies.com/main/?s='+target, (data) ->
    console.log target
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
          show_result('icon-ok', "#{target} is <a href='http://javjunkies.com/main/JavJ.php?#{q}'>HERE</a>.", 'success')
          $('.preview').attr('src', image_link).show()
        return
    else
      $('.alert').fadeOut 'fast', ->
        show_result('icon-remove', "#{target} doesn't exist.", 'error')
  ).error( ->
    $('.alert').fadeOut 'fast', ->
      show_result('icon-ban-circle', 'is temporary unavailable. Please try again later.', 'block')
  )

$ ->
  $('.alert').hide()
  $('input').focus().keydown (event) ->
    if event.which == 13 and $('input').val()
      vinfo = unwrap($('input').val().toUpperCase())
      if not vinfo
        $('.alert').fadeOut 'fast', ->
          show_result('icon-remove', "#{$('input').val()} doesn't exist.", 'error')
          return
      search_vid(vinfo)
