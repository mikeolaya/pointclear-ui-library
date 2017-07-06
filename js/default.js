// Default JavaScript Functions and Initiations
$(document).ready(function() {
  //URL
  setURL()
  setTendina()
  // setTheme()
  $('.background_hero').append('<div class="hero_blocker"></div>')

  // Disable scroll on hash
  if (location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 1);
  }

	// Initiate page
	setPage();

  // dropdown
  $('.tendina_dropdown a[target*="iframe"]').click(function(event) {
	  event.preventDefault();
    // console.log('it works')

    if (!$(this).hasClass('active')) {
      var thisHref = $(this).attr('href');
      var categoryID = $(this).closest('.root_').find('.link_').attr('id');
      TweenLite.to($('.main_iframe'), 0.3, {opacity:0});
      window.location.hash = '#!'+categoryID

      setTimeout(function() {
        $("#iframe").attr("src", thisHref);
      },300);

    } else {
      
    }
    

	});

  $('.tendina_dropdown a.more').click(function(event) {
    setScrollbars()   
  });

  $('.list-menu a[class*="_view"]').click(function(event) {
	  event.preventDefault();
	  detectViewSize($(this).attr('class'),'yes')

	  $('.list-menu a').removeClass('on');
  	$(this).addClass('on');
	});

  // window resize
  $(window).resize(function () {
    setPage();
  });

  //nav bar header
  $('.trigger_menu').click(function(event) {
    event.preventDefault();
    setTriggerMenu();
  });


  // go to styleguide
  $('.cta_to_styleguide').click(function(event) {
    event.preventDefault();
    var thisHref = $(this).attr('href');
    ctaToStyleguide(thisHref);

  });

  $('.cta_to_homepage').click(function(event) {
    event.preventDefault();
    var thisHref = $(this).attr('href');
    ctaToHomepage(thisHref);

  });

  $('.home_hero .circle').click(function(event) {
    event.preventDefault();
    $(window).delay(0).animate({scrollTop:640 },640);

  });

  $('.nav_page a').click(function(event) {
    event.preventDefault();
    
  });

  $('.theme_control').click(function(event) {
    event.preventDefault();
    $(this).closest('#theme_settings').toggleClass('active');
  });

  $('.color_box_theme').click(function(event) {
    event.preventDefault();
    
    if (!$(this).hasClass('selected')) {
      var theme = $(this).attr('id')
      
      $('.color_box_theme.selected').removeClass('selected');
      $(this).closest('body').removeClass(function(index, className) {
        return (className.match(/(^|\s)theme_\S+/g) || []).join(' ');
      });

      // if ($('body').hasClass('iframe')) {
      //   window.parent.$('body').removeClass(function(index, className) {
      //     return (className.match(/(^|\s)theme_\S+/g) || []).join(' ');
      //   });
      // } 

      $(this).addClass('selected');
      $(this).closest('#theme_settings').toggleClass('active');
      $(this).closest('body').addClass(theme);
      // if ($('body').hasClass('iframe')) {
      //   window.parent.$('body').addClass(theme);
      // } 

      setThemeCookie()
      setTheme()

    }
      
  });


  // Tabs
  $(".nav-tabs a").on('click', function (e) {
    e.preventDefault();
    $(this).tab("show");
  })

  $(".hero .nav-tabs").on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass("on_tabs");
    console.log('butt')
  })



}); // end document ready






