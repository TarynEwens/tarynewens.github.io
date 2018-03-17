console.log("main connected");

$(document).ready( function() {
$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  });

  new TypeIt('h1', {
     strings: 'This is a simple string.',
     speed: 150,
     autoStart: false
});
});
