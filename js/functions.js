var $win = window.parent.$('.main_window').width();

function setPage() {
  //homepage
  TweenLite.to($('.intro_box'), 0.3, {opacity:1, delay:0.1});
  TweenLite.to($('.main_iframe'), 0, {opacity:1});
  // all pages
  setHeight()
  setSelectedDropdown()
  showContent()
  // setSidebarMainHeight()
  setScrollbars()

  $win = window.parent.$('.main_window').width();
  setTriggerMenuOff()

  if ($('body').hasClass('page_home')) {
    setHomepage()
  }

  TweenLite.to($('#theme_settings'), 0.3, {opacity:'1',delay:2});
}

function setURL() {
  var path = "../guidelines/"
  switch(location.hash.substr(2)) {
    case 'getting-started': setURLiframe(path+"getting_started/overview.html"); break;
    case 'brand-guidelines': setURLiframe(path+"brand/overview.html"); break;
    case 'web-guidelines': setURLiframe(path+"web/overview.html"); break;
    case 'ios-guidelines': setURLiframe(path+"ios/overview.html"); break;
    case 'android-guidelines': setURLiframe(path+"android/overview.html"); break;
    case 'icons': setURLiframe(path+"icons/overview.html"); break; 
  }

}

function setTheme() {
  $('.color_box_theme').removeClass('selected');
  $('.hero_blocker').remove();
  if($.cookie('themeSettings') == 1) { 
    $('.page_home, body.iframe').addClass('theme_blue');
    $('#theme_blue').addClass('selected');
  } else if($.cookie('themeSettings') == 2) { 
    $('.page_home, body.iframe').addClass('theme_green');
    $('#theme_green').addClass('selected');
  } else if($.cookie('themeSettings') == 3) { 
    $('.page_home, body.iframe').addClass('theme_orange');
    $('#theme_orange').addClass('selected');
  } else if($.cookie('themeSettings') == 4) { 
    $('.page_home, body.iframe').addClass('theme_pink');
    $('#theme_pink').addClass('selected');
  }

  $('.background_hero').append('<div class="hero_blocker"></div>')

  // if ($('body').is('[class*="theme_"]')) {
  //   $('.background_hero').append('<div class="hero_blocker"></div>')
  // }
}



function setThemeCookie() {
  var date = new Date();
  date.setTime(date.getTime() + (86400 * 1000));

  if ($('body').hasClass('theme_blue')) {
    $.cookie('themeSettings', 1, { path: '/', expires : date });
  } else if ($('body').hasClass('theme_green')) {
    $.cookie('themeSettings', 2, { path: '/', expires : date});
  } else if ($('body').hasClass('theme_orange')) {
    $.cookie('themeSettings', 3, { path: '/', expires : date});
  } else if ($('body').hasClass('theme_pink')) {
    $.cookie('themeSettings', 4, { path: '/', expires : date});
  } 

  console.log('cookie')
}


function setURLiframe(thisSrc) {
  $("#iframe").attr("src", thisSrc);

}

function setTendina() {

  window.parent.$('.tendina_dropdown').tendina({
    animate: true,
    speed: 300,
    onHover: false,
    hoverDelay: 300,
    activeMenu: $('.active'),
    openCallback: function(clickedEl) {
      // console.log('Hey dude!');
      $('.sidebar_wrapper').delay(0).animate({scrollTop:0 },100);

      
    },
    closeCallback: function(clickedEl) {
      // console.log('Bye dude!');
    }
  });
}




function setHomepage() {
  var heroBox_half_x = $('.home_hero_wrapper').width() / 2
  var heroBox_half_y = $('.home_hero_wrapper').height() / 2

  console.log(heroBox_half_x)

  TweenLite.to($('.home_hero_wrapper'), 0, {
    marginLeft:-heroBox_half_x,
    marginTop:-heroBox_half_y
  });

  TweenLite.to($('.home_hero_wrapper'), 0.3, {
    opacity:1,
    delay:2
  });

  TweenLite.to($('.page_home .wrapper'), 0.6, {
    opacity:1,
    delay:1
  });

  TweenLite.to($('.home_hero .circle'), 0.3, {
    opacity:1,
    delay:2.4
  });
  
  
}

function setIframe() {
  TweenLite.to(window.parent.$('.main_iframe'), 0.3, {opacity:1});
  getIframeId()
  setTriggerMenuOff()
  setNavPage()
}

function ctaToStyleguide(thisHref) {
  TweenLite.to(window.parent.$('.page_home .wrapper'), 0.3, {
    opacity:0
  });

  TweenLite.to(window.parent.$('.page_home .wrapper'), 0, {
    display:'none',
    delay:0.6
  });

  TweenLite.to(window.parent.$('#sidebar'), 0.6, {
    opacity:1,
    left: '0',
    delay:0.4
  });

  $('#theme_settings').removeClass('active')
  TweenLite.to($('#theme_settings'), 0.3, {opacity:'0'});

  TweenLite.to(window.parent.$('.body'), 0.3, {backgroundColor:'#f2f2f2'});
  setTimeout(function() {
    window.location = thisHref;
  },1000);
}

function ctaToHomepage(thisHref) {
  TweenLite.to(window.parent.$('#sidebar'), 0.6, {
    left: '-280px',
    delay:0.3
  });

  TweenLite.to(window.parent.$('.main_iframe'), 0.6, {
    opacity: 0
  });
  
  $('#theme_settings').removeClass('active')
  TweenLite.to($('#theme_settings'), 0.3, {opacity:'0'});

  setTimeout(function() {
    window.location = thisHref;
  },1000);
}

function setHeight() {
  var fullHeight = window.parent.$(window).height()
  var halfHeight = fullHeight / 2

  var mobileHeight = fullHeight - $('.header').height()

  if ($win >= 740) {
    TweenLite.to($('.full_height'), 0, {height:fullHeight});
    TweenLite.to($('.half_height'), 0, {height:halfHeight});

    TweenLite.to($('.main_iframe'), 0, {height:'100%'});

  } else {
    TweenLite.to($('.main_iframe'), 0, {height:mobileHeight});
  }
}

function showContent() {
  TweenLite.to($('#content'), 0.3, {opacity:1, delay:0.8});
}

function goToPage(link) {
  var x = link.closest('.tendina_dropdown').find('.selected').closest()
  TweenLite.to($('#content'), 0.3, {opacity:0});
}

function setSidebarMainHeight() {
  var x = $(window).height() - $(".header").height() - 40
  var mainHeight = $(window).height() - $(".header").height()
  $('#sidebar').height(x)
  // $('.sidebar_wrapper').height(x)
}

function setScrollbars() {
  var x = $('#sidebar').height() - $('#sidebar .logo').outerHeight()
  $('.sidebar_wrapper').height(x - 130 /* added extra padding */ )

  if ($win >= 740) {
    $('.sidebar_wrapper').perfectScrollbar();
  } else {
    $('.sidebar_wrapper').perfectScrollbar('destroy');
  }
  $('.sidebar_wrapper').delay(0).animate({scrollTop:0 },0);
}



function getIframeId() {
  if ($('body').hasClass('iframe')) {
    var x = $('body').attr('id')

    var sidebarActive = window.parent.$('.'+x)
    var subeMenu =  sidebarActive.closest('.submenu')

    subeMenu.closest('.tendina_dropdown').find('.active').removeClass('active')

    var subeMenuHeight =  sidebarActive.closest('.submenu').height()

    sidebarActive.addClass('active')

    TweenLite.to(subeMenu, 0.3, {display:'block',opacity:0});
    // TweenLite.to(subeMenu, 0.3, {height:subeMenuHeight});
    TweenLite.to(subeMenu, 0.3, {opacity:0.8});
    TweenLite.to(subeMenu.closest('li'), 0.3, {className:'+=selected'});
  }
}


function setSelectedDropdown() {
  var branding = $('.link_branding').closest('li').find('ul')
  var elements = $('.link_elements').closest('li').find('ul')
  var modules = $('.link_modules').closest('li').find('ul')
  var pages = $('.link_pages').closest('li').find('ul')

  var brandingHeight = branding.height()
  var elementsHeight = elements.height()
  var modulesHeight = modules.height()
  var pagesHeight = pages.height()

  if ($('body').hasClass('page_branding')) {
    TweenLite.to(branding, 0.3, {display:'block',height:'0'});
    TweenLite.to(branding, 0.3, {height:brandingHeight});
    TweenLite.to(branding, 0.3, {opacity:1});
    TweenLite.to($('.link_branding'), 0.3, {className:'+=active'});
    TweenLite.to($('.link_branding').closest('li'), 0.3, {className:'+=selected'});

  } else if ($('body').hasClass('page_elements')) {
    TweenLite.to(elements, 0.3, {display:'block',height:'0'});
    TweenLite.to(elements, 0.3, {height:elementsHeight});
    TweenLite.to(elements, 0.3, {opacity:1});
    TweenLite.to($('.link_elements'), 0.3, {opacity:1,className:'+=active'});
    TweenLite.to($('.link_elements').closest('li'), 0.3, {className:'+=selected',delay:0.3});
  } else if ($('body').hasClass('page_modules')) {
    TweenLite.to(modules, 0.3, {display:'block',height:'0'});
    TweenLite.to(modules, 0.3, {height:modulesHeight});
    TweenLite.to(modules, 0.3, {opacity:1});
    TweenLite.to($('.link_modules'), 0.3, {opacity:1,className:'+=active'});
    TweenLite.to($('.link_modules').closest('li'), 0.3, {className:'+=selected'});
  } else if ($('body').hasClass('page_pages')) {
    TweenLite.to(pages, 0.3, {display:'block',height:'0'});
    TweenLite.to(pages, 0.3, {height:pagesHeight});
    TweenLite.to(pages, 0.3, {opacity:1});
    TweenLite.to($('.link_pages'), 0.3, {opacity:1,className:'+=active'});
    TweenLite.to($('.link_pages').closest('li'), 0.3, {className:'+=selected'});
  }
}

function detectViewSize(className,pressed) {
  var mobile = 420
  var med = 720

  if (className == 'small_view') {
    $('.page').addClass('viewport');
    if (pressed == 'yes') {
      TweenLite.to($('.styleguide'), 0.5, {width:mobile, paddingTop:'20'});
      TweenLite.to($('.main'), 0.5, {backgroundColor:'#f2f2f2'});
    } else {
      TweenLite.to($('.styleguide'), 0, {width:mobile, paddingTop:'20'});
      TweenLite.to($('.main'), 0, {backgroundColor:'#f2f2f2'});
    }

  } else if (className == 'med_view') {
    $('.page').addClass('viewport');
    if (pressed == 'yes') {
      TweenLite.to($('.styleguide'), 0.3, {width:med, paddingTop:'20'});
      TweenLite.to($('.main'), 0.3, {backgroundColor:'#f8f8f8'});
    } else {
      TweenLite.to($('.styleguide'), 0, {width:med, paddingTop:'20'});
      TweenLite.to($('.main'), 0, {backgroundColor:'#f8f8f8'});
    }
  } else if (className == 'large_view') {
    $('.page').removeClass('viewport');
    if (pressed == 'yes') {
      TweenLite.to($('.styleguide'), 0.5, {width:'100%', paddingTop:'0'});
      TweenLite.to($('.main'), 0.5, {backgroundColor:'#fff'});
    } else {
      TweenLite.to($('.styleguide'), 0, {width:'100%', paddingTop:'0'});
      TweenLite.to($('.main'), 0, {backgroundColor:'#fff'});
    }
  }
}


function setTriggerMenu() {
  if ($win >= 768) {
  
  } else {
    $('.page').addClass('showMenu').append('<div class="bg-overlay"></div>');
    TweenLite.to($('#sidebar'), 0.3, {left:'0'});
    // showrMenu Off
    $('.showMenu .bg-overlay').click(function(event) {
      event.preventDefault();
      setTriggerMenuOff();
    });

  }
}


function setTriggerMenuOff() {
  TweenLite.to(window.parent.$('.showMenu .bg-overlay'), 0.3, {opacity:0});

  if ($win >= 768) {
   TweenLite.to(window.parent.$('#sidebar'), 0.3, {left:'0px'}); 
  } else {
   TweenLite.to(window.parent.$('#sidebar'), 0.3, {left:'-280px'}); 
  }

  setTimeout(function() {
    window.parent.$('.showMenu .bg-overlay').remove();
    window.parent.$('.page').removeClass('showMenu')    
  },300);
}


function setNavPage() {
  var sidebar = window.parent.$('#sidebar')
  var nextActiveNavClass = sidebar.find('.active').closest('li').next().find('a')
  var prevActiveNavClass = sidebar.find('.active').closest('li').prev().find('a')
  
  // if next empty
  if (!nextActiveNavClass.length) {
    // find if this nav has class more
    var nextActiveNavClass = sidebar.find('.active').closest('.third').closest('li').next().find('a:first')
    
    if (nextActiveNavClass.hasClass('more')) {
      var nextActiveNavClass = nextActiveNavClass.closest('li').find('li:first a')
      setNextNavPage(nextActiveNavClass)
    } else {
      // if empty
      if (!nextActiveNavClass.length) {
        // find the prev root link
        var nextActiveNavClass =  sidebar.find('.active').closest('.root_').next().find('li:first a')
        if (!nextActiveNavClass.length) {
          // if empyy
          $('.nav_next span').hide()
        } else {
          setNextNavPage(nextActiveNavClass)
        }
      } else {
        setNextNavPage(nextActiveNavClass)
      }

    }

  } else {
    // find if this nav has class more
    if (!nextActiveNavClass.hasClass('more')) {
      setNextNavPage(nextActiveNavClass)
    }  else {
      // if has class more
      var nextActiveNavClass = nextActiveNavClass.closest('li').find('li:first a')
      setNextNavPage(nextActiveNavClass)
    }
  }  


  // if prev empty
  if (!prevActiveNavClass.length) {
    // find if this nav has class more
    var prevActiveNavClass = sidebar.find('.active').closest('.third').closest('li').prev().find('a:first')
    
    if (prevActiveNavClass.hasClass('more')) {
      var prevActiveNavClass = prevActiveNavClass.closest('li').find('li:last a')
      setPrevNavPage(prevActiveNavClass)
    } else {
      // if empty
      if (!prevActiveNavClass.length) {
        // find the prev root link
        var prevActiveNavClass =  sidebar.find('.active').closest('.root_').prev().find('li:first a')
        if (!prevActiveNavClass.length) {
          // if empyy
          $('.nav_prev span').hide()
        } else {
          setPrevNavPage(prevActiveNavClass)
        }
      } else {
        setPrevNavPage(prevActiveNavClass)
      }

    }


  } else {
    // find if this nav has class more
    if (!prevActiveNavClass.hasClass('more')) {
      setPrevNavPage(prevActiveNavClass)
    }  else {
      // if has class more
      var prevActiveNavClass = prevActiveNavClass.closest('li').find('li:last a')
      setPrevNavPage(prevActiveNavClass)
    }
    
  }  
}

function setNextNavPage(nextPage) {
  var nextPageText = nextPage.text()
  var nextPageHref = nextPage.attr('href');
  
  if (nextPageText == 'Overview') {
    var nextPageText = nextPage.closest('.root_').find('.link_').text()
    $('.nav_next .page').text(nextPageText)
  } else {
    $('.nav_next .page').text(nextPageText)
  }

  

  $('.nav_next').click(function(event) {
    event.preventDefault();

    setTendina() 
    nextPage.click()

    nextPage.closest('.third').closest('li').addClass('selected')
    nextPage.closest('.third').css('display','block')
  });

}


function setPrevNavPage(prevPage) {
  var prevPageText = prevPage.text()
  var prevPageHref = prevPage.attr('href');
  
  if (prevPageText == 'Overview') {
    var prevPageText = prevPage.closest('.root_').find('.link_').text()
    $('.nav_prev .page').text(prevPageText)
  } else {
    $('.nav_prev .page').text(prevPageText)
  }

  

  $('.nav_prev').click(function(event) {
    event.preventDefault();

    setTendina() 
    prevPage.click()

    prevPage.closest('.third').closest('li').addClass('selected')
    prevPage.closest('.third').css('display','block')
  });



}


function setNavPageClicked(prevPage) {

}



