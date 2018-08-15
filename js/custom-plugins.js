/*
** Template name : alphaIndustrial 
** Creation date : 04/03/2018 
** Author        : Mohssine Aboutaj 
** Description   : This is template single page for your industry and factory, you can also customize for use in your work
** Contact Me    : mohssineaboutajtemplates@gmail.com
*/

$(function(){
  // Trigger bxSlider and make global customize for bxSlider
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: false,
    pager: false,
    keyboardEnabled: true
  });

  // function change the content buttons in bxslider
  function changeText(theSelector, myText){
  	$(theSelector).html(myText);
  }
  // calling the function changeText()
  changeText('.bx-wrapper .bx-prev','<');
  changeText('.bx-wrapper .bx-next', '>');

  // make global customize styling for bxSlider
  $('.bx-wrapper').css({
  	border: 'none',
  	background: 'rgba(0, 0, 0, 0.75)',
	  boxShadow: 'none'
	});

  // customize the buttons on bxslider
  $('.bx-wrapper a').css({
	  background: $('body').attr('data-main-color'),
	  textAlign: 'center',
	  fontSize: '15px',
	  textIndent: '1px',
	  lineHeight: $('.bx-wrapper a').height() + 'px',
    borderRadius: '50%'
  });

  // make bxSlider full screen
  $('header .bx-wrapper').height($('header').height() + 'px');

  // TriggerFire the niceScroll plugin and customiz it
  $("body").niceScroll({
    cursorcolor: $('body').attr('data-main-color'),
    cursoropacitymin: 0.5,
    cursorwidth: '10px',
    cursorborder: 'none'
  });

  // make smothing scroll to element on link clicked
  $('.nav a,footer a').on("click", function(){
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  });

  // Trigger the wow.js liberary
  new WOW().init({
        mobile: false // stop trigger wow.js in mobile, default is TRUE
      });

});
