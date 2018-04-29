console.log("Hi there! Well, look at you checking out the console of my website! You must be one of those fancy developer type people!");
console.log("Want to hire me? You should!");
console.log("Hit me up via taryn@taryn.codes and we can have a chat!");
console.log("I also really like to chat about dogs, so if you have a dog or even just a photo of a dog, then we can chat about that too!");

$(document).ready( function() {
$(window).scroll(function(){
    $(".text-box").css("opacity", 1 - $(window).scrollTop() / 250);
  });

  new TypeIt('.heading-primary-sub', {
     strings: 'This is a simple string.',
     speed: 100,
     autoStart: false
  });

});
