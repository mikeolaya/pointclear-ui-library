$(document).ready(function() {
  setIframe()
  if ($('body').hasClass('nav_tab_sticky')) {
  	$('.nav-tabs a').click(function(event) {
	  	var navTab = $( ".tab-content" )
			var navTabOffset = navTab.offset().top - 60
	  	$(window).delay(0).animate({scrollTop:navTabOffset },600);
  	});
  }

  // Config ZeroClipboard
    ZeroClipboard.config({
      moviePath: '../../flash/ZeroClipboard.swf',
      hoverClass: 'btn-clipboard-hover'
    })

    // Insert copy to clipboard button before .highlight
    $('.highlight').each(function () {
      var btnHtml = '<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>'
      $(this).before(btnHtml)
    })
    var zeroClipboard = new ZeroClipboard($('.btn-clipboard'))
    var $htmlBridge = $('#global-zeroclipboard-html-bridge')

    // Handlers for ZeroClipboard
    zeroClipboard.on('load', function () {
      $htmlBridge
        .data('placement', 'top')
        .attr('title', 'Copy to clipboard')
        .tooltip()


      // Copy to clipboard
      zeroClipboard.on('dataRequested', function (client) {
        var highlight = $(this).parent().nextAll('.highlight').first()
        client.setText(highlight.text())
      })

      // Notify copy success and reset tooltip title
      zeroClipboard.on('complete', function () {
        $htmlBridge
          .attr('title', 'Copied!')
          .tooltip('fixTitle')
          .tooltip('show')
          .attr('title', 'Copy to clipboard')
          .tooltip('fixTitle')
      })
    })

    // Hide copy button when no Flash is found
    // or wrong Flash version is present
    zeroClipboard.on('noflash wrongflash', function () {
      $('.zero-clipboard').remove()
      ZeroClipboard.destroy()
    })


  
});


$(window).on('scroll', function() {
	var scrollPos = $(this).scrollTop();
	
	if ($('body').hasClass('nav_tab_sticky')) {
		var navTab = $( ".tab-content" )
		var navTabOffset = navTab.offset().top - 60

		if (scrollPos >= navTabOffset) {
			$('body').addClass('nav_tab_sticky_yes');
		}  else if (scrollPos < navTabOffset ) {
			$('body').removeClass('nav_tab_sticky_yes');
		}
	}

});