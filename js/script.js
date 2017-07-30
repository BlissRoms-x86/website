$(document).ready(function() {

        // Transition effect for navbar and back-to-top icon
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 550) { 
              $('.navbar').addClass('solid');
              $('.back-to-top').addClass('visible'); 
          } else {
              $('.navbar').removeClass('solid');
              $('.back-to-top').removeClass('visible');  
          }

        });


        // Scrolling effect for Arrow icons
        $("#scrollIcon").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#about"), 1000);
        });
        $("#nav-about").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#about"), 1000);
        });
        $("#nav-portfolio").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#portfolio"), 1000);
        });
        $("#nav-contact").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#contact"), 1000);
        });
        $(".navbar-brand").click(function(e) {
            e.preventDefault();
            $.scrollTo(0, 1000);
        });
          
      });